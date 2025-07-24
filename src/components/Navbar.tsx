import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--navy-shadow);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--dark-slate);
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: var(--green);
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: var(--slate);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--green);
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo href="#home">CyberGuard AI</Logo>
      <NavLinks>
        <NavLink href="#mission">Mission</NavLink>
        <NavLink href="#milestones">Genesis</NavLink>
        <NavLink href="#tech">Technologies</NavLink>
        <NavLink href="#blog">Blog</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <NavLink href="#upload">Scan Files</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
