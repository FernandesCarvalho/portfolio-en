import styled from 'styled-components';

const Foot = styled.footer`
  padding: 24px;
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
`;

export default function Footer() {
  return <Foot>© {new Date().getFullYear()} — My Portfolio</Foot>;
}
