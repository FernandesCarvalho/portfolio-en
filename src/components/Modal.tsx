import { useEffect, useRef } from 'react';
import photo from '../assets/images/profile-picture.png';
export default function Modal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const element = dialog.current;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="about-dialog"
      aria-labelledby="about-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const items = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="about-content">
        <div className="about-content-header">
          <div>
            <h2 id="about-title">About me</h2>
          </div>
          <img
            src={photo}
            alt="Fernandes Carvalho"
            width="200"
            height="200"
            className="profile-photo"
          />
        </div>
        <p>
          I'm Fernandes Carvalho, a front-end developer based in Porto, Portugal. I build web
          interfaces with React and TypeScript, with a focus on clear interactions and maintainable
          code.
        </p>
        <p>
          My portfolio includes Mecaniko, a workshop management platform, alongside projects
          exploring food ordering, book discovery and contact management. Explore the projects to
          see the problems each application addresses.
        </p>
        <a href="mailto:fernandes.ventura25@gmail.com">fernandes.ventura25@gmail.com</a>
        <div className="actions">
          <a className="button" href="/FernandesCV.pdf" target="_blank" rel="noopener noreferrer">
            View CV (PDF)
          </a>
          <a className="button secondary" href="/FernandesCV.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </dialog>
  );
}
