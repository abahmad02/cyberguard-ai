import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--dark-navy);
  color: var(--slate);
`;

const Title = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: var(--lightest-slate);
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const UploadBox = styled(motion.div)<{ isDragOver: boolean }>`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  border: 2px dashed ${props => props.isDragOver ? 'var(--light-slate)' : 'var(--green)'};
  border-radius: 10px;
  text-align: center;
  background: ${props => props.isDragOver ? 'var(--navy)' : 'var(--light-navy)'};
  transition: all 0.3s ease;
`;

const UploadText = styled.p`
  font-size: 1.2rem;
  color: var(--light-slate);
  margin-bottom: 2rem;
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 1rem 2rem;
  background: ${props => props.disabled ? 'var(--light-slate)' : 'var(--green)'};
  color: var(--dark-navy);
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  margin: 0.5rem;

  &:hover:not(:disabled) {
    background: transparent;
    color: var(--green);
    border: 1px solid var(--green);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ResultContainer = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto 0;
  padding: 2rem;
  border-radius: 10px;
  background: var(--light-navy);
`;

const ResultHeader = styled.div<{ ismalicious: boolean }>`
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.ismalicious ? 'rgba(255, 59, 48, 0.1)' : 'rgba(52, 199, 89, 0.1)'};
  border: 1px solid ${props => props.ismalicious ? '#ff3b30' : '#34c759'};
`;

const ResultTitle = styled.h3<{ ismalicious: boolean }>`
  color: ${props => props.ismalicious ? '#ff3b30' : '#34c759'};
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
`;

const Probability = styled.p`
  color: var(--light-slate);
  margin: 0;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.1);
  border: 1px solid #ff3b30;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

const ProgressMessage = styled.div`
  color: var(--green);
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid var(--green);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
`;

interface ScanResult {
  id: string;
  filename: string;
  is_malicious: boolean;
  malicious_probability: number;
  scan_date: string;
  status: string;
}

const API_BASE_URL = 'https://CyberAI.pythonanywhere.com/api';

const UploadSection: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    // Validate file type
    const allowedTypes = ['.jar', '.class', '.zip'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!allowedTypes.includes(fileExtension)) {
      setError(`Invalid file type. Please upload ${allowedTypes.join(', ')} files only.`);
      return;
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      setError('File size too large. Maximum size is 50MB.');
      return;
    }

    setError(null);
    setScanResult(null);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE_URL}/upload/`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.scan_id) {
        // Poll for scan result
        await pollScanResult(result.scan_id);
      } else {
        throw new Error('No scan ID returned from upload');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setIsUploading(false);
    }
  };

  const pollScanResult = async (scanId: string) => {
    const maxAttempts = 30; // 30 seconds timeout
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/scan/${scanId}/`);
        
        if (!response.ok) {
          throw new Error(`Failed to get scan result: ${response.statusText}`);
        }

        const result = await response.json();
        
        if (result.status === 'completed') {
          setScanResult(result);
          setIsUploading(false);
        } else if (result.status === 'failed') {
          throw new Error(result.error || 'Scan failed');
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 1000); // Poll every second
        } else {
          throw new Error('Scan timeout');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to get scan result');
        setIsUploading(false);
      }
    };

    poll();
  };

  const clearResults = () => {
    setScanResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Section id="upload">
      <Title>Upload & Scan Suspicious Files</Title>
      <UploadBox
        isDragOver={isDragOver}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <UploadText>
          {isUploading 
            ? 'Analyzing file... Please wait.' 
            : 'Drag and drop your .class, .jar, or .zip files here, or click to browse.'
          }
        </UploadText>
        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept=".jar,.class,.zip"
          onChange={handleFileChange}
        />
        <Button 
          onClick={handleFileSelect} 
          disabled={isUploading}
        >
          {isUploading ? 'Scanning...' : 'Choose Files'}
        </Button>
        {(scanResult || error) && (
          <Button onClick={clearResults} disabled={isUploading}>
            Clear Results
          </Button>
        )}
      </UploadBox>

      {isUploading && (
        <ProgressMessage>
          🔍 Analyzing file with AI-powered malware detection...
        </ProgressMessage>
      )}

      {error && (
        <ErrorMessage>
          ❌ Error: {error}
        </ErrorMessage>
      )}

      {scanResult && (
        <ResultContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResultHeader ismalicious={scanResult.is_malicious}>
            <ResultTitle ismalicious={scanResult.is_malicious}>
              {scanResult.is_malicious ? '🚨 MALWARE DETECTED' : '✅ FILE IS SAFE'}
            </ResultTitle>
            <Probability>
              Malware Risk: {(scanResult.malicious_probability * 100).toFixed(1)}%
            </Probability>
          </ResultHeader>
          
          <div style={{ textAlign: 'left', color: 'var(--light-slate)' }}>
            <p><strong>Filename:</strong> {scanResult.filename}</p>
            <p><strong>Scan Date:</strong> {new Date(scanResult.scan_date).toLocaleString()}</p>
            <p><strong>Scan ID:</strong> {scanResult.id}</p>
          </div>
        </ResultContainer>
      )}
    </Section>
  );
};

export default UploadSection;
