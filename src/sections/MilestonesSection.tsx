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
            <Year>2020</Year>
            <p>
              CyberGuard AI was born from the minds of cybersecurity wizards and
              AI sorcerers, aiming to revolutionize digital defense.
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
            <Year>2022</Year>
            <p>
              Launched our first Quantum Scanner, achieving a 99.9% detection
              rate for known and zero-day threats.
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
            <Year>2024</Year>
            <p>
              Expanded our services to protect over 50 million devices
              worldwide, from personal computers to corporate networks.
            </p>
          </Content>
        </Container>
      </Timeline>
    </Section>
  );
};

export default MilestonesSection;
