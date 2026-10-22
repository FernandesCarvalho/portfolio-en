import styled from 'styled-components';
import HeroImg from '../assets/images/IlustracoesPortfolioFernandes-05.webp';

const Wrap = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    padding: 48px 24px;
  }

  div {
    p {
      color: #7f8fa6;
      font-size: 16px;
      margin-right: 40px;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    div {
      p {
        margin: 0 auto;
        padding-bottom: 24px;
      }
    }
  }
`;

const Main = styled.h1`
  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 2.5rem;
  color: #e1e1e6;
  margin-bottom: 32px;

  span {
    color: #00bfa6;
  }
`;

const Description = styled.span`
  color: #e1e1e6;
  margin: 0 0 20px 0;
  font-size: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  align-self: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Hero() {
  return (
    <>
      <Wrap id="home">
        <div>
          <Main>
            Hello,
            <br /> I'm <span>Fernandes</span>,
            <br />
            Front-end Developer
          </Main>
          <p>
            I build web interfaces with React and TypeScript, from focused everyday tools to a
            complete workshop management platform.
          </p>
          <Description>Based in Porto, Portugal.</Description>
          <div className="actions">
            <a className="button" href="#projects">
              Explore my projects
            </a>
            <a className="button secondary" href="mailto:fernandes.ventura25@gmail.com">
              Get in touch
            </a>
            <a href="/FernandesCV.pdf" target="_blank" rel="noopener noreferrer">
              View CV (PDF)
            </a>
          </div>
        </div>
        <Image src={HeroImg} alt="" width="500" height="500" />
      </Wrap>
    </>
  );
}
