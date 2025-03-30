import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FiAward, FiCode, FiShield, FiTrendingUp, FiCheck, FiUsers, FiGlobe, FiLayers, FiZap } from 'react-icons/fi';

const Choose = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Expertise",
      icon: <FiAward size={20} />,
      content: {
        title: "Industry-Leading Expertise",
        description: "Our team comprises top 1% specialists with 10+ years average experience delivering complex solutions.",
        features: [
          "Certified Experts",
          "Industry Knowledge",
          "Continuous Training"
        ]
      }
    },
    {
      id: 1,
      label: "Technology",
      icon: <FiCode size={20} />,
      content: {
        title: "Cutting-Edge Technology Stack",
        description: "We leverage only modern, battle-tested technologies to future-proof your solutions.",
        features: [
          "Latest frameworks and libraries",
          "Microservices architecture",
          "CI/CD pipeline integration"
        ]
      }
    },
    {
      id: 2,
      label: "Security",
      icon: <FiShield size={20} />,
      content: {
        title: "Enterprise-Grade Security",
        description: "Security-first approach embedded in every layer of our development process.",
        features: [
          "SOC 2 Type II compliant",
          "Regular penetration testing",
          "GDPR & HIPAA ready solutions"
        ]
      }
    },
    {
      id: 3,
      label: "Results",
      icon: <FiTrendingUp size={20} />,
      content: {
        title: "Proven Business Results",
        description: "We measure success by the tangible impact we create for our clients.",
        features: [
          "Average 3.2x ROI for our clients",
          "95% project delivery on time",
          "40% faster time-to-market"
        ]
      }
    }
  ];

  const stats = [
    { icon: <FiUsers size={24} />, value: "150+", label: "Satisfied Clients" },
    { icon: <FiGlobe size={24} />, value: "12", label: "Countries Served" },
    { icon: <FiLayers size={24} />, value: "300+", label: "Projects Completed" }
  ];

  return (
    <Section className='font-[Poppins]'>
      {/* Vector Background Elements */}
      <VectorBackground>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0 100 Q 300 50 600 150 T 1200 100 L1200 0 L0 0 Z" fill="#FBC800" opacity="0.03" />
          <path d="M0 700 Q 400 750 800 650 T 1200 700 L1200 800 L0 800 Z" fill="#FBC800" opacity="0.03" />
        </svg>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#FBC800] opacity-10"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, (Math.random() * 60) - 30],
              x: [0, (Math.random() * 40) - 20],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </VectorBackground>

      {/* Glowing accents */}
      <GlowAccent className="top-0 right-0 bg-[#FBC800] opacity-10" />
      <GlowAccent className="bottom-0 left-0 bg-[#FBC800] opacity-10" />

      <Container>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Subtitle>WHY WE STAND OUT</Subtitle>
            <Title>
              Enterprise-Grade Solutions <Highlight>Built Different</Highlight>
            </Title>
            <Underline
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <Description>
              We combine technical excellence with business acumen to deliver transformative digital experiences.
            </Description>
          </motion.div>
        </Header>

        <ContentLayout>
          <TabsContainer>
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: activeTab === tab.id ? '#FBC800' : '#f0f0f0'
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: tab.id * 0.1 }}
                viewport={{ once: true }}
              >
                <TabIcon>{tab.icon}</TabIcon>
                {tab.label}
              </TabButton>
            ))}
          </TabsContainer>

          <TabContent>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <TabTitle>{tabs[activeTab].content.title}</TabTitle>
                <TabDescription>{tabs[activeTab].content.description}</TabDescription>
                <FeaturesList>
                  {tabs[activeTab].content.features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <FeatureIcon>
                        <FiCheck size={16} />
                      </FeatureIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </motion.div>
            </AnimatePresence>
          </TabContent>
        </ContentLayout>

        {/* <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatIcon>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.icon}
                </motion.div>
              </StatIcon>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer> */}
      </Container>
    </Section>
  );
};

// Enhanced Styled Components
const Section = styled.section`
  padding: 8rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const VectorBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const GlowAccent = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbc800;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

const Highlight = styled.span`
  color: #fbc800;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 6px;
    background: #fbc800;
    opacity: 0.3;
    z-index: -1;
    border-radius: 2px;
  }
`;

const Underline = styled(motion.div)`
  width: 80px;
  height: 3px;
  background: #fbc800;
  margin: 0 auto 2rem;
  transform-origin: left center;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a5568;
  opacity: 0.9;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 5rem;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (min-width: 992px) {
    flex-direction: column;
    width: 240px;
    flex-shrink: 0;
  }
`;

const TabButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
  background: ${props => props.active ? '#fbc800' : '#f5f5f5'};
  color: ${props => props.active ? '#000000' : '#4a5568'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(251, 200, 0, 0.2)' : 'none'};
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
`;

const TabContent = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

const TabTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #fbc800;
    border-radius: 2px;
  }
`;

const TabDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 2.5rem;
  max-width: 700px;
`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1.05rem;
  line-height: 1.5;
  color: #2d3748;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(251, 200, 0, 0.03);
  border-left: 3px solid #fbc800;
`;

const FeatureIcon = styled.span`
  color: #fbc800;
  margin-top: 0.2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-top: 5rem;
`;

const StatCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

const StatIcon = styled.div`
  color: #fbc800;
  margin-bottom: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: rgba(251, 200, 0, 0.1);
  border-radius: 50%;
`;

const StatValue = styled.div`
  font-size: 2.75rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.75rem;
`;

const StatLabel = styled.div`
  font-size: 1.05rem;
  color: #4a5568;
  letter-spacing: 0.5px;
`;

export default Choose;