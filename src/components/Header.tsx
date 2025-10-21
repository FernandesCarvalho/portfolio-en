import styled from 'styled-components';
import useActiveSection from '../hooks/useActiveSection';
import logoImg from '../assets/images/PortfolioIcon.png';

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
  background: #1e2026f1;
  z-index: 9999;
  box-shadow: 0 1px 0 rgba(2, 6, 23, 0.01);
  border-bottom: 1px solid #484c55ff;
`;

const Logo = styled.a`
  img {
    width: 40px;
    margin-left: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavLink = styled.a`
  color: #e1e1e6;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 6px;
  margin-left: 2px;

  &:hover {
    background: #7f8fa6;
  }
  &.active {
    background: #00bfa6;
  }
`;

export default function Header() {
  const active = useActiveSection(['home', 'services', 'projects', 'contact']);

  return (
    <Container>
      <Logo>
        <a href="#home">
          <img src={logoImg} alt="" />
        </a>
      </Logo>
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
          Contacts
        </NavLink>
      </Nav>
    </Container>
  );
}
