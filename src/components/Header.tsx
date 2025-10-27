import { useState } from 'react';
import styled from 'styled-components';
import useActiveSection from '../hooks/useActiveSection';
import logoImg from '../assets/images/PortfolioIcon.png';
import { FiMenu, FiX } from 'react-icons/fi';
import Modal from './Modal';

interface MobileMenuProps {
  open: boolean;
}

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

const NavLink2 = styled.a`
  background-color: #a42b2bff;
  color: #e1e1e6;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 6px;
  margin-left: 2px;
  cursor: pointer;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #e1e1e6;
  font-size: 28px;
  cursor: pointer;
  display: none;
  z-index: 10001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 60px;
  right: ${({ open }) => (open ? '0' : '-100%')};
  width: 100%;
  height: calc(100vh - 60px);
  background: #1e2026;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  transition: right 0.3s ease;

  a {
    color: #e1e1e6;
    font-size: 20px;
    text-decoration: none;
    font-weight: 500;
    padding: 12px 20px;
    border-radius: 8px;

    &:hover {
      background: #00bfa6;
    }

    &.active {
      background: #00bfa6;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const active = useActiveSection(['home', 'services', 'projects', 'contact']);

  return (
    <Container>
      <Logo>
        <a href="#home">
          <img src={logoImg} alt="" />
        </a>
      </Logo>
      <Nav>
        <NavLink2 onClick={() => setModalOpen(true)}>About</NavLink2>
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
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <MobileMenu open={menuOpen}>
        <a
          onClick={() => setMenuOpen(false)}
          className={active === 'home' ? 'active' : ''}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          className={active === 'services' ? 'active' : ''}
          href="#services"
        >
          Services
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          className={active === 'projects' ? 'active' : ''}
          href="#projects"
        >
          Projects
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          className={active === 'contact' ? 'active' : ''}
          href="#contact"
        >
          Contacts
        </a>
      </MobileMenu>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </Container>
  );
}
