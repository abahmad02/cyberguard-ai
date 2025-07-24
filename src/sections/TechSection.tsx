import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import featureExtractionIcon from "../assets/images/feature-extraction.svg";
import patternRecognitionIcon from "../assets/images/pattern-recognition.svg";
import randomForestIcon from "../assets/images/random-forest.svg";

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--navy);
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background: var(--light-navy);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
`;

const TechTitle = styled.h3`
  color: var(--lightest-slate);
  margin-bottom: 1rem;
`;

const TechDescription = styled.p`
  color: var(--light-slate);
  font-size: 0.9rem;
`;

const TechSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="tech">
      <Title>Key Technologies</Title>
      <Grid>
        <Card
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Icon src={featureExtractionIcon} alt="Feature Extraction" />
          <TechTitle>Feature Extraction from Bytecode</TechTitle>
          <TechDescription>
            Using the ASM framework, we extract comprehensive structural and
            behavioral features from Java bytecode.
          </TechDescription>
        </Card>
        <Card
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Icon src={patternRecognitionIcon} alt="Pattern Recognition" />
          <TechTitle>Intelligent Pattern Recognition</TechTitle>
          <TechDescription>
            Our system relies on large-scale feature learning for intelligent
            pattern recognition, going beyond conventional static analysis.
          </TechDescription>
        </Card>
        <Card
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Icon src={randomForestIcon} alt="Random Forest Classifier" />
          <TechTitle>Random Forest Classifier</TechTitle>
          <TechDescription>
            We use a Random Forest classifier to distinguish between malicious
            and benign bytecode with high accuracy.
          </TechDescription>
        </Card>
      </Grid>
    </Section>
  );
};

export default TechSection;
