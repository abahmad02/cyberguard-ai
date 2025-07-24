import React, { useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../config/particles-config";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-navy);
  color: var(--slate);
  text-align: left;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Content = styled.div`
  max-width: 1000px;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: var(--lightest-slate);
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--slate);
  margin-bottom: 2rem;
  max-width: 540px;
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  background: var(--green);
  color: var(--dark-navy);
  border: 1px solid var(--green);
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: var(--green);
  }
`;

const HomeSection: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <HeroContainer id="home">
      <StyledParticles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInit}
      />
      <Content>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.h2
            variants={variants}
            style={{
              color: "var(--green)",
              marginBottom: "1rem",
              fontFamily: "monospace",
            }}
          >
            Hi, we are
          </motion.h2>
          <Title variants={variants}>CyberGuard AI.</Title>
          <Subtitle variants={variants}>
            We build next-generation cybersecurity solutions to protect your
            digital assets from the quantum realm to the cloud.
          </Subtitle>
          <Button
            href="#upload"
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scan a File
          </Button>
        </motion.div>
      </Content>
    </HeroContainer>
  );
};

export default HomeSection;
