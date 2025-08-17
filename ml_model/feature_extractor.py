"""
Basic Feature Extractor for Java Bytecode Analysis (60% Implementation)
This module provides basic feature extraction from Java .class files
Core functionality implemented, advanced features pending.
"""

import os
import re
import struct
import hashlib
import zipfile
import math
from typing import Dict, List, Any
import logging

logger = logging.getLogger(__name__)


class JavaBytecodeFeatureExtractor:
    """Basic feature extractor for Java bytecode analysis"""
    
    def __init__(self):
        # Basic JVM opcodes (simplified set)
        self.basic_opcodes = {
            'arithmetic': ['iadd', 'ladd', 'isub', 'lsub', 'imul', 'lmul'],
            'invocations': ['invokevirtual', 'invokespecial', 'invokestatic'],
            'field_ops': ['getfield', 'putfield', 'getstatic', 'putstatic'],
            'control_flow': ['ifeq', 'ifne', 'goto', 'return']
        }
        
        # Basic suspicious patterns (core set only)
        self.suspicious_patterns = {
            'reflection': ['java/lang/reflect', 'getDeclaredMethod'],
            'runtime': ['java/lang/Runtime', 'exec'],
            'file_system': ['java/io/File', 'FileWriter', 'delete'],
            'network': ['java/net/Socket', 'java/net/URL']
        }

    def extract_basic_features(self, file_path: str) -> Dict[str, Any]:
        """
        Extract basic features from a Java file
        
        Args:
            file_path: Path to the file to analyze
            
        Returns:
            Dictionary containing basic extracted features
        """
        try:
            features = self._initialize_basic_features()
            
            if not os.path.exists(file_path):
                raise FileNotFoundError(f"File not found: {file_path}")
            
            # Basic file information
            features.update(self._extract_basic_metadata(file_path))
            
            # Simple file type handling
            if file_path.lower().endswith('.class'):
                features.update(self._analyze_basic_class(file_path))
            elif file_path.lower().endswith(('.jar', '.zip')):
                features.update(self._analyze_basic_archive(file_path))
            
            # Basic suspicious pattern detection
            features.update(self._detect_basic_patterns(file_path))
            
            return features
            
        except Exception as e:
            logger.error(f"Error extracting features from {file_path}: {e}")
            return self._initialize_basic_features()

    def _initialize_basic_features(self) -> Dict[str, Any]:
        """Initialize basic feature dictionary"""
        return {
            # Basic file info
            'file_size': 0,
            'entropy': 0.0,
            'file_hash': '',
            
            # Basic structure
            'class_count': 0,
            'method_count': 0,
            'field_count': 0,
            
            # Basic patterns
            'string_count': 0,
            'suspicious_strings': 0,
            
            # Basic API usage
            'reflection_usage': 0,
            'runtime_usage': 0,
            'file_system_usage': 0,
            'network_usage': 0,
            
            # Basic indicators
            'uses_reflection': False,
            'has_main_method': False,
            
            # Placeholder for advanced features (not implemented)
            'suspicious_activity_score': 0,
        }

    def _extract_basic_metadata(self, file_path: str) -> Dict[str, Any]:
        """Extract basic file metadata"""
        features = {}
        
        features['file_size'] = os.path.getsize(file_path)
        
        # Basic file hash
        with open(file_path, 'rb') as f:
            content = f.read()
            features['file_hash'] = hashlib.md5(content).hexdigest()  # Basic hash
            features['entropy'] = self._calculate_basic_entropy(content)
        
        return features

    def _analyze_basic_class(self, file_path: str) -> Dict[str, Any]:
        """Basic analysis of .class file"""
        features = {'class_count': 1}
        
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            
            # Basic magic number check
            if len(content) > 4:
                magic = struct.unpack('>I', content[:4])[0]
                if magic == 0xCAFEBABE:
                    # TODO: Implement detailed class parsing
                    features['method_count'] = 5  # Placeholder
                    features['field_count'] = 3   # Placeholder
            
        except Exception as e:
            logger.error(f"Error analyzing class file: {e}")
        
        return features

    def _analyze_basic_archive(self, file_path: str) -> Dict[str, Any]:
        """Basic analysis of archive file"""
        features = {'class_count': 0}
        
        try:
            with zipfile.ZipFile(file_path, 'r') as zip_file:
                for file_info in zip_file.filelist:
                    if file_info.filename.endswith('.class'):
                        features['class_count'] += 1
                        
        except Exception as e:
            logger.error(f"Error analyzing archive: {e}")
        
        return features

    def _detect_basic_patterns(self, file_path: str) -> Dict[str, Any]:
        """Basic suspicious pattern detection"""
        features = {
            'reflection_usage': 0,
            'runtime_usage': 0,
            'file_system_usage': 0,
            'network_usage': 0,
            'uses_reflection': False,
            'has_main_method': False,
        }
        
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            
            # Basic pattern counting
            for category, patterns in self.suspicious_patterns.items():
                count = 0
                for pattern in patterns:
                    count += content.count(pattern.encode())
                features[f'{category}_usage'] = count
            
            # Basic boolean checks
            features['uses_reflection'] = b'java/lang/reflect' in content
            features['has_main_method'] = b'main' in content
            
        except Exception as e:
            logger.error(f"Error detecting patterns: {e}")
        
        return features

    def _calculate_basic_entropy(self, data: bytes) -> float:
        """Basic entropy calculation"""
        if not data:
            return 0.0
        
        # Simplified entropy calculation
        byte_counts = {}
        for byte in data:
            byte_counts[byte] = byte_counts.get(byte, 0) + 1
        
        entropy = 0.0
        data_len = len(data)
        
        for count in byte_counts.values():
            if count > 0:
                probability = count / data_len
                entropy -= probability * math.log2(probability)
        
        return entropy

    def get_basic_feature_vector(self, file_path: str) -> List[float]:
        """
        Extract basic features and return as vector
        
        Args:
            file_path: Path to the file to analyze
            
        Returns:
            List of basic feature values
        """
        features = self.extract_basic_features(file_path)
        
        # Basic feature order (reduced set)
        basic_features = [
            'file_size', 'entropy', 'class_count', 'method_count', 'field_count',
            'string_count', 'suspicious_strings', 'reflection_usage', 'runtime_usage',
            'file_system_usage', 'network_usage', 'uses_reflection', 'has_main_method',
            'suspicious_activity_score'
        ]
        
        vector = []
        for feature_name in basic_features:
            value = features.get(feature_name, 0)
            if isinstance(value, bool):
                value = int(value)
            vector.append(float(value))
        
        return vector


# TODO: Advanced features to be implemented:
# - Detailed bytecode analysis
# - Advanced string pattern recognition  
# - Control flow analysis
# - Cryptographic operation detection
# - Native method analysis
# - Exception handling patterns
# - Obfuscation detection algorithms
# - Advanced entropy calculations

if __name__ == "__main__":
    extractor = JavaBytecodeFeatureExtractor()
    print("Basic Feature Extractor - 60% Implementation")
    print("Advanced features pending implementation...")
