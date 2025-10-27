import styled from 'styled-components';
import fotome from '../assets/images/fotome.png';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
`;

const Container = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10002;
`;

const ModalContent = styled.div`
  display: flex;
  max-width: 600px;
  background-color: #1e2026;
  color: blue;
  z-index: 2;
  position: relative;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: block;
    width: 90%;
    text-align: center;
    padding: 16px;
  }
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #e1e1e6;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    z-index: 3; /* above modal content */
  }
`;

const ModalInformation = styled.div`
  display: block;
  margin-right: 24px;

  h2 {
    font-size: 32px;
    margin-bottom: 32px;
    color: #e1e1e6;
  }

  @media (max-width: 768px) {
    margin: 0;

    h2 {
      margin-bottom: 16px;
    }
  }
`;

const Description = styled.p`
  color: #7f8fa6;
  margin-bottom: 24px;
`;

const Information = styled.div`
  color: #e1e1e6;
`;

const LayoutImg = styled.div`
  img {
    height: 250px;
    border-radius: 16px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 195px;
    margin: 0 auto;
    padding-top: 16px;
  }
`;

const ButtonCV = styled.span`
  margin-top: 16px;
  border: none;

  a {
    border-radius: 4px;
    background-color: #00bfa6;
    padding: 8px 12px;
    color: #e1e1e6;
    font-weight: bold;
    text-decoration: none;
  }
`;

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <>
      <Container>
        <Overlay onClick={onClose}></Overlay>
        <ModalContent>
          <CloseButton aria-label="Close modal" onClick={onClose}>
            ×
          </CloseButton>
          <ModalInformation>
            <h2>About me</h2>
            <Description>
              Hi, my name is Fernandes Carvalho. I am a focused, organized, and solution-oriented
              person with strong problem-solving skills. I easily adapt to new challenges and have a
              continuous drive for learning and improvement. I value teamwork, clear communication,
              and efficiency in everything I do, always striving to grow and deliver high-quality
              results.
            </Description>
            <Information>Porto - Portugal</Information>
            <Information>fernandes.ventura25@gmail.com</Information>
          </ModalInformation>
          <LayoutImg>
            <img src={fotome} alt="Profile Picture" />
            <div>
              <ButtonCV>
                <a
                  href="https://docs.google.com/document/d/1LWlopi4YmySxOAQx_6sYdKsUoWbqZgg_/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                >
                  See CV
                </a>
              </ButtonCV>
              <ButtonCV>
                <a href="/FernandesCV.docx" download="FernandesCV.docx">
                  Download
                </a>
              </ButtonCV>
            </div>
          </LayoutImg>
        </ModalContent>
      </Container>
    </>
  );
}
