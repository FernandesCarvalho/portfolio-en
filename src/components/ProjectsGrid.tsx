import styled from 'styled-components';
import contactsList from '../assets/images/ContactList.png';
import eFood from '../assets/images/e-food.png';
import miniBooks from '../assets/images/Minibooks.png';

const Grid = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 48px 24px;

  h2 {
    margin-bottom: 32px;
    color: #e1e1e6;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const CardLink = styled.a<{ reverse?: boolean }>`
  display: flex;
  gap: 16px;
  align-items: stretch;
  padding: 16px;
  border: 1px solid #00bfa6;
  border-radius: 10px;
  background: #1e2026;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
  flex-direction: ${(p) => (p.reverse ? 'row-reverse' : 'row')};
  text-decoration: none;
  color: inherit;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 36px rgba(2, 6, 23, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ImgWrap = styled.div`
  flex: 0 0 320px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    flex: 0 0 260px;
  }

  @media (max-width: 768px) {
    flex: unset;
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
      onject-fit: contain;
    }
  }
`;
const Content = styled.div`
  flex: 1 1 auto;

  h3 {
    color: #e1e1e6;
  }

  p {
    color: #7f8fa6;
  }
`;

export default function ProjectsGrid() {
  const mock = [
    {
      title: 'E-Food',
      desc: 'The E-Food project is a web platform developed to simulate an online food delivery service, connecting users to a variety of restaurants and cuisines. The application offers an intuitive browsing experience, allowing users to explore different gastronomic options and discover new establishments.',
      img: eFood,
      link: 'https://ebac-efood-sigma.vercel.app/',
    },
    {
      title: 'Mini-Books',
      desc: 'The Mini Books project is a web application designed to provide an interactive online catalog of books. It offers users a streamlined experience to browse, search, and view details about various literary works. The application aims to showcase a clean, user-friendly interface while demonstrating robust data handling and presentation capabilities.',
      img: miniBooks,
      link: 'https://mini-books-eta.vercel.app/',
    },
    {
      title: 'Contacts List',
      desc: 'The Contacts List application is a web-based tool designed for efficient management of personal and professional contacts. It provides a straightforward and intuitive interface for users to organize their contacts, making it easy to add, view, edit, and categorize them. The application emphasizes usability and a clean design to ensure a smooth user experience.',
      img: contactsList,
      link: 'https://contacts-list-two.vercel.app/',
    },
  ];

  return (
    <Grid id="projects">
      <h2>Projects</h2>
      <Cards>
        {mock.map((p, i) => (
          <CardLink
            key={p.title}
            href={p.link || '#'}
            target={p.link ? '_blank' : undefined}
            rel={p.link ? 'noopener noreferrer' : undefined}
            referrerPolicy={p.link ? 'no-referrer' : undefined}
            reverse={i % 2 === 0}
          >
            <ImgWrap>
              <img src={p.img} alt={`${p.title} screenshot`} />
            </ImgWrap>
            <Content>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Content>
          </CardLink>
        ))}
      </Cards>
    </Grid>
  );
}
