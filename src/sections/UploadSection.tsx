import React from "react";
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

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-150%);
    top: -20px;
    color: var(--green);
    font-family: monospace;
    font-size: 1.5rem;
  }
`;

const UploadBox = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  border: 2px dashed var(--green);
  border-radius: 10px;
  text-align: center;
  background: var(--light-navy);
`;

const UploadText = styled.p`
  font-size: 1.2rem;
  color: var(--light-slate);
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: var(--green);
  color: var(--dark-navy);
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: var(--green);
    border: 1px solid var(--green);
  }
`;

const UploadSection: React.FC = () => {
  return (
    <Section id="upload">
      <Title>Upload & Scan Suspicious Files</Title>
      <UploadBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <UploadText>
          Drag and drop your .class, .jar, or .zip files here, or click to
          browse.
        </UploadText>
        <Button>Choose Files</Button>
      </UploadBox>
    </Section>
  );
};

export default UploadSection;
