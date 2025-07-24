import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 6rem 2rem;
  background: var(--navy);
  color: var(--slate);
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(26px, 5vw, 40px);
  color: var(--lightest-slate);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: var(--green);
  font-family: monospace;
  margin-bottom: 2rem;
`;

const Form = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 4px;
  color: var(--lightest-slate);
  font-size: 1rem;

  &::placeholder {
    color: var(--slate);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  border-radius: 4px;
  color: var(--lightest-slate);
  font-size: 1rem;
  min-height: 150px;

  &::placeholder {
    color: var(--slate);
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: var(--green);
  color: var(--dark-navy);
  border: 1px solid var(--green);
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: var(--green);
  }
`;

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <Subtitle>What’s Next?</Subtitle>
      <Title>Get In Touch</Title>
      <p style={{ maxWidth: "600px", margin: "0 auto 3rem" }}>
        Although we’re not actually accepting messages, this is a showcase of a
        contact form. Feel free to connect with the project creator for more
        information.
      </p>
      <Form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <Button type="submit">Say Hello</Button>
      </Form>
    </Section>
  );
};

export default ContactSection;
