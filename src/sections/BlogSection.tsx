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
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogCard = styled(motion.div)`
  background: var(--light-navy);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PostTitle = styled.h3`
  color: var(--lightest-slate);
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const PostExcerpt = styled.p`
  color: var(--light-slate);
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const PostMeta = styled.div`
  margin-top: 1.5rem;
  font-family: monospace;
  font-size: 0.9rem;
  color: var(--slate);
`;

const BlogSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="blog">
      <Title>From the Blog</Title>
      <BlogGrid>
        <BlogCard
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <CardContent>
            <PostTitle>
              The Future of Cybersecurity: How CyberGuard AI is Changing the
              Game
            </PostTitle>
            <PostExcerpt>
              A brief look into how our Random Forest classifier, trained on
              Java bytecode features, is setting a new standard for malware
              detection. We dive deep into the technology that powers our
              platform and our vision for a more secure digital world.
            </PostExcerpt>
            <PostMeta>
              <span>By The CyberGuard AI Team</span> |{" "}
              <span>July 24, 2025</span>
            </PostMeta>
          </CardContent>
        </BlogCard>
        <BlogCard
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CardContent>
            <PostTitle>
              Deep Dive: Feature Extraction from Java Bytecode
            </PostTitle>
            <PostExcerpt>
              At the heart of CyberGuard AI is our sophisticated feature
              extraction pipeline. We leverage the powerful ASM library to
              deconstruct Java bytecode into a rich set of structural and
              behavioral features. This isn't just about looking at the code;
              it's about understanding its soul. We analyze everything from
              method-level instruction sequences and control-flow graphs to
              class-level metadata and dependency networks. This granular
              approach allows our AI to see beyond simple signatures and
              identify the subtle, often obfuscated, patterns of malicious
              behavior.
            </PostExcerpt>
            <PostMeta>
              <span>By The CyberGuard AI Team</span> |{" "}
              <span>July 18, 2025</span>
            </PostMeta>
          </CardContent>
        </BlogCard>
        <BlogCard
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CardContent>
            <PostTitle>
              Why a Random Forest? Choosing the Right Model for Threat Detection
            </PostTitle>
            <PostExcerpt>
              When it comes to classifying bytecode as either benign or
              malicious, the choice of machine learning model is critical. We
              chose a Random Forest classifier for several key reasons. Its
              ensemble nature, building multiple decision trees and merging
              their outputs, makes it incredibly robust against overfitting and
              noise—common challenges in cybersecurity data. It provides high
              accuracy, can handle a large number of features efficiently, and
              offers valuable insights into feature importance. This
              transparency helps us continuously refine our detection
              strategies, ensuring we stay one step ahead of emerging threats.
            </PostExcerpt>
            <PostMeta>
              <span>By The CyberGuard AI Team</span> |{" "}
              <span>July 12, 2025</span>
            </PostMeta>
          </CardContent>
        </BlogCard>
      </BlogGrid>
    </Section>
  );
};

export default BlogSection;
