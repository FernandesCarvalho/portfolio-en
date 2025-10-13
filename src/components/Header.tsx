import styled from "styled-components";

const Container = styled.header`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.1rem;
  color: #0f172a;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavLink = styled.a`
  color: #0f172a;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 6px;

  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo href="/">Fernandes's Portfolio</Logo>
      <Nav>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#about">About me</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </Container>
  );
}
