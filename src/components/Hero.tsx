import styled from 'styled-components';
import HeroImg from '../assets/images/IlustracoesPortfolioFernandes-05.png';

const Wrap = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    p {
      color: #7f8fa6;
      font-size: 16px;
      margin-right: 40px;
      margin-bottom: 32px;
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
            Front End Developer
          </Main>
          <p>
            Focused on writing efficient, maintainable code and delivering modern, high-performance
            web applications. Driven by curiosity and continuous learning, I strive to transform
            complex problems into simple, elegant solutions.
          </p>
          <Description>Crafting clean, fast, and accessible user experiences.</Description>
        </div>
        <Image src={HeroImg} alt="Ilustration of a setup" />
      </Wrap>
    </>
  );
}
