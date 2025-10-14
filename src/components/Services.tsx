import styles from 'styled-components';
import { IoIosConstruct } from 'react-icons/io';
import { IoMdSearch } from 'react-icons/io';
import { FaRecycle } from 'react-icons/fa';
import { MdOutlineDeveloperMode } from 'react-icons/md';

const Container = styles.section`
    padding: 24px;
    display: flex;
    justify-content: space-between;
`;

const Card = styles.div`
    width: 200px;
    height: auto;
    background: #1E2026;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
    border-radius: 10px;
    padding: 16px;
`;

const Icon = styles.div`
    padding: 8px;
    font-size: 40px;
    color: #00BFA6;
`;

const Title = styles.h3`
color: #E1E1E6;
`;
const Description = styles.p`
color: #7F8FA6;`;

export default function Services() {
  return (
    <>
      <Container id="services">
        <Card>
          <Icon>
            <IoIosConstruct />
          </Icon>
          <Title>Web Development</Title>
          <Description>
            Custom web solutions built with modern technologies to ensure performance, scalability,
            and seamless user experience.
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
      </Container>
    </>
  );
}
