import styled from 'styled-components';

const Wrap = styled.section`
  padding: 80px 24px;
  text-align: left;
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

const Title = styled.h2`
  font-size: 24px;
  margin: 0 0 12px 0;
  color: #e1e1e6;
`;

const Description = styled.p`
  color: #7f8fa6;
  margin: 0 0 20px 0;
`;

export default function Hero() {
  return (
    <Wrap id="home">
      <Main>
        Hello,
        <br /> I'm <span>Fernandes</span>,
        <br />
        Front End Developer
      </Main>
      <Title>Turning ideas into interactive experiences.</Title>
      <Description>Crafting clean, fast, and accessible user experiences.</Description>
    </Wrap>
  );
}
