import styled from 'styled-components';
import { IoIosConstruct } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import { FaRecycle } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';
import bootstrap from '../assets/images/bootstrap.png';
import typescript from '../assets/images/typescript.png';
import vue from '../assets/images/vue.png';

const Container = styled.section`
  padding: 24px;

  h2 {
    margin-bottom: 32px;
    color: #e1e1e6;
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 200px;
  height: auto;
  background: #1e2026;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
  border-radius: 10px;
  padding: 16px;
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
  justify-content: space-between;
  p {
    margin-top: 40px;
    img {
      margin: 12px;
      height: 80px;
    }
  }
`;

export default function Services() {
  return (
    <>
      <Container id="services">
        <h2>Services and tools</h2>
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
            <Title>SEO Optimization</Title>
            <Description>
              Comprehensive search engine optimization focused on improving visibility, increasing
              organic traffic, and enhancing website authority.
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
            <img src={html} alt="html" />
          </p>
          <p>
            <img src={css} alt="css" />
          </p>
          <p>
            <img src={javascript} alt="javascript" />
          </p>
          <p>
            <img src={node} alt="node" />
          </p>
          <p>
            <img src={typescript} alt="typescript" />
          </p>
          <p>
            <img src={react} alt="react" />
          </p>
          <p>
            <img src={vue} alt="vue" />
          </p>
          <p>
            <img src={bootstrap} alt="bootstrap" />
          </p>
        </Tools>
      </Container>
    </>
  );
}
