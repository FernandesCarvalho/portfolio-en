import styled from 'styled-components';
import useActiveSection from '../hooks/useActiveSection';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e2026;
  z-index: 9999;
  box-shadow: 0 1px 0 rgba(2, 6, 23, 0.06);
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 1.1rem;
  color: #e1e1e6;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavLink = styled.a`
  color: #E1E1E6;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 6px;

  &:hover {
    background: #7F8FA6;
  &.active {
    background: #00BFA6;
    font-weight: 700;
  }
`;

export default function Header() {
  const active = useActiveSection(['home', 'services', 'projects', 'contact']);

  return (
    <Container>
      <Logo href="/">Fernandes's Portfolio</Logo>
      <Nav>
        <NavLink className={active === 'home' ? 'active' : ''} href="#home">
          Home
        </NavLink>
        <NavLink className={active === 'services' ? 'active' : ''} href="#services">
          Services
        </NavLink>
        <NavLink className={active === 'projects' ? 'active' : ''} href="#projects">
          Projects
        </NavLink>
        <NavLink className={active === 'contact' ? 'active' : ''} href="#contact">
          Contact
        </NavLink>
      </Nav>
    </Container>
  );
}
