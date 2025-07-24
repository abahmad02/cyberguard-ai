import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import missionImage from "../assets/images/ai-brain.jpg";

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

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
`;

const MissionText = styled(motion.div)`
  font-size: 1.1rem;
  color: var(--light-slate);
  line-height: 1.6;
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: var(--green-tint);
  border-radius: 4px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const MissionSection: React.FC = () => {
  return (
    <Section id="mission">
      <Title>Our Galactic Mission</Title>
      <Content>
        <MissionText
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            To create an impenetrable digital fortress around every organization
            on earth using AI so advanced, it makes science fiction look like
            yesterday's news.
          </p>
          <p style={{ marginTop: "1rem" }}>
            We are pioneering the future of cybersecurity, one quantum leap at a
            time, blending intelligent pattern recognition with large-scale
            feature learning to stay ahead of emerging threats.
          </p>
        </MissionText>
        <ImageWrapper
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <StyledImage src={missionImage} alt="Abstract AI Brain" />
        </ImageWrapper>
      </Content>
    </Section>
  );
};

export default MissionSection;
