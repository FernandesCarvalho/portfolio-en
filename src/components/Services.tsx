import styled from 'styled-components';
import { IoIosConstruct } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import { FaRecycle } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import html from '../assets/images/html.webp';
import css from '../assets/images/css.webp';
import javascript from '../assets/images/javascript.webp';
import react from '../assets/images/react.webp';
import node from '../assets/images/node.webp';
import bootstrap from '../assets/images/bootstrap.webp';
import typescript from '../assets/images/typescript.webp';
import vue from '../assets/images/vue.webp';
import Clogo from '../assets/images/C.png';

const Section = styled.section`
  background: #1e2026;
`;

const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;

  h2 {
    margin-bottom: 32px;
    color: #e1e1e6;
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
    justify-items: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Card = styled.div`
  width: 100%;
  height: auto;
  background: #0f1115;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
  border-radius: 10px;
  padding: 16px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  padding: 8px;
  font-size: 40px;
  color: #00bfa6;
`;

const Title = styled.h3`
  color: #e1e1e6;
`;
const Description = styled.p`
  color: #7f8fa6;
`;

const Tools = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  p {
    margin-top: 4px;
    img {
      margin: 12px;
      height: 64px;
    }
  }

  @media (max-width: 1024px) {
    p {
      img {
        height: 60px;
      }
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;

    p {
      img {
        height: 40px;
      }
    }
  }
`;

export default function Services() {
  return (
    <>
      <Section>
        <Container id="services">
          <h2>Skills & services</h2>
          <Content>
            <Card>
              <Icon>
                <IoIosConstruct />
              </Icon>
              <Title>Web Development</Title>
              <Description>
                Custom web solutions built with modern technologies to ensure performance,
                scalability, and seamless user experience.
              </Description>
            </Card>
            <Card>
              <Icon>
                <IoMdSearch />
              </Icon>
              <Title>Technical SEO foundations</Title>
              <Description>
                Semantic page structure, descriptive metadata and performance-conscious
                implementation to support discoverability.
              </Description>
            </Card>
            <Card>
              <Icon>
                <FaRecycle />
              </Icon>
              <Title>Website Redesign</Title>
              <Description>
                Modernization of outdated websites with improved aesthetics, usability, and
                functionality aligned with brand identity.
              </Description>
            </Card>
            <Card>
              <Icon>
                <MdOutlineDeveloperMode />
              </Icon>
              <Title>Responsive Design</Title>
              <Description>
                Design approach that ensures flawless display and performance across all devices —
                desktop, tablet, and mobile.
              </Description>
            </Card>
          </Content>
          <Tools>
            <p>
              <img src={html} loading="lazy" decoding="async" alt="html" />
            </p>
            <p>
              <img src={css} loading="lazy" decoding="async" alt="css" />
            </p>
            <p>
              <img src={javascript} loading="lazy" decoding="async" alt="javascript" />
            </p>
            <p>
              <img src={Clogo} loading="lazy" decoding="async" alt="C" />
            </p>
            <p>
              <img src={node} loading="lazy" decoding="async" alt="node" />
            </p>
            <p>
              <img src={typescript} loading="lazy" decoding="async" alt="typescript" />
            </p>
            <p>
              <img src={react} loading="lazy" decoding="async" alt="react" />
            </p>
            <p>
              <img src={vue} loading="lazy" decoding="async" alt="vue" />
            </p>
            <p>
              <img src={bootstrap} loading="lazy" decoding="async" alt="bootstrap" />
            </p>
          </Tools>
        </Container>
      </Section>
    </>
  );
}
