import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background: var(--dark-navy);
  color: var(--slate);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  text-align: center;

  h4 {
    font-size: 1.1rem;
    color: var(--lightest-slate);
    margin-bottom: 1.5rem;
  }

  p,
  a {
    color: var(--slate);
    text-decoration: none;
    display: block;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--green);
    }
  }

  p {
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  a {
    font-size: 1.2rem;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-slate);
  font-size: 0.9rem;
  font-family: monospace;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <h4>CyberGuard AI</h4>
          <p>
            Pioneering the future of cybersecurity with advanced AI, protecting
            your digital assets from emerging threats.
          </p>
        </FooterColumn>
        <FooterColumn>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#mission">Mission</a>
          <a href="#tech">Technologies</a>
          <a href="#blog">Blog</a>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact Us</h4>
          <p>Email: contact@cyberguard.ai</p>
          <p>Phone: (555) 123-4567</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </SocialLinks>
        </FooterColumn>
      </FooterGrid>
      <FooterBottom>
        <div>© 2025 CyberGuard AI. All rights reserved.</div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
