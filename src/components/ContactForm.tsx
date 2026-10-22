import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import contactsImg from '../assets/images/IlustracoesPortfolioFernandes-04.webp';

const Section = styled.section`
  background: #1e2026;
`;

const Wrap = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 48px 24px;

  h2 {
    margin-bottom: 32px;
    color: #e1e1e6;
  }
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  h3 {
    color: #e1e1e6;
  }

  .social-icon {
    font-size: 40px;
    margin: 0 16px;
    color: #7f8fa6;
    transition: all 0.3s ease;

    &:hover {
      color: #00bfa6;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContatsImg = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  margin-left: 20px;

  h3 {
    margin-bottom: 16px;
  }
`;

const SocialContact = styled.div`
  padding-bottom: 32px;

  h3 {
    margin-bottom: 16px;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    background: #7f8fa6;
    color: #0f1115;
    padding: 10px 20px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: #00bfa6;
      transform: translateY(-2px);
    }

    #icon2 {
      font-size: 24px;
      margin: 0;
      margin-right: 8px; /* espaçamento entre o ícone e o texto */
      color: #0f1115;
    }
  }
`;

export default function ContactForm() {
  return (
    <Section>
      <Wrap id="contact">
        <h2>Contact</h2>
        <Social>
          <ContatsImg src={contactsImg} alt="" loading="lazy" />
          <div>
            <SocialContact>
              <h3>Let's talk about your project</h3>
              <a href="mailto:fernandes.ventura25@gmail.com" className="contact-button">
                <CiMail id="icon2" />
                Get in touch
              </a>
            </SocialContact>
            <SocialLinks>
              <h3>You can find me</h3>
              <a
                aria-label="LinkedIn profile"
                href="https://www.linkedin.com/in/fernandes-carvalho/"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                aria-label="GitHub profile"
                href="https://github.com/FernandesCarvalho"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
              >
                <FaGithubSquare className="social-icon" />
              </a>
            </SocialLinks>
          </div>
        </Social>
      </Wrap>
    </Section>
  );
}
