import { useState } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import Modal from './Modal';
import logo from '../assets/images/PortfolioIcon.webp';

const sections = ['home', 'projects', 'services', 'contact'];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const active = useActiveSection(sections);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#home" aria-label="Fernandes Carvalho - home">
          <img src={logo} width="40" height="40" alt="" />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {' '}
          {menuOpen ? 'Close menu' : 'Menu'}{' '}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMenuOpen(false);
              document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
            }
          }}
        >
          {sections.map((id) => (
            <a
              key={id}
              href={'#' + id}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {id === 'services' ? 'Skills & services' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <button className="about-button" aria-haspopup="dialog" onClick={() => setAboutOpen(true)}>
          About me <span aria-hidden="true">↗</span>
        </button>
      </header>
      {aboutOpen && <Modal onClose={() => setAboutOpen(false)} />}
    </>
  );
}
