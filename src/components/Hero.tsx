import styled from 'styled-components';

const Wrap = styled.section`
  padding: 80px 24px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2rem;
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
      <Title>Turning ideas into interactive experiences.</Title>
      <Description>Crafting clean, fast, and accessible user experiences.</Description>
    </Wrap>
  );
}
