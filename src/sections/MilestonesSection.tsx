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

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: var(--lightest-navy);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
`;

const Container = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    right: -8px;
    background-color: var(--green);
    border: 2px solid var(--dark-navy);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &.right::after {
    left: -8px;
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  background-color: var(--light-navy);
  position: relative;
  border-radius: 6px;
`;

const Year = styled.h3`
  color: var(--green);
`;

const MilestonesSection: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="milestones">
      <Title>The Genesis Story</Title>
      <Timeline>
        <Container
          className="left"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <Content>
            <Year>March 2025</Year>
            <p>
              🧠 The spark ignites! Our team of cybersecurity wizards starts
              brewing the perfect Random Forest classifier. Coffee consumption
              reaches dangerous levels.
            </p>
          </Content>
        </Container>
        <Container
          className="right"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <Content>
            <Year>May 2025</Year>
            <p>
              🔬 Feature extraction magic happens! Our ASM framework starts
              dissecting Java bytecode like a digital pathologist. Malware has
              nowhere to hide.
            </p>
          </Content>
        </Container>
        <Container
          className="left"
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true }}
        >
          <Content>
            <Year>July 2025</Year>
            <p>
              🚀 Launch day! CyberGuard AI emerges from the digital shadows,
              ready to read malware's mind and protect the cyber realm. The
              future is now!
            </p>
          </Content>
        </Container>
      </Timeline>
    </Section>
  );
};

export default MilestonesSection;
