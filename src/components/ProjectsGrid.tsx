import styled from 'styled-components';

const Grid = styled.section`
  padding: 48px 24px;
  color: #e1e1e6;

  h2 {
    margin-bottom: 24px;
  }
`;

const Cards = styled.div``;

const Card = styled.article`
  display: block;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
`;

export default function ProjectsGrid() {
  const mock = [
    {
      title: 'E-Food',
      desc: 'The E-Food project is a web platform developed to simulate an online food delivery service, connecting users to a variety of restaurants and cuisines. The application offers an intuitive browsing experience, allowing users to explore different gastronomic options and discover new establishments.',
    },
    {
      title: 'Mini-Books',
      desc: 'The Mini Books project is a web application designed to provide an interactive online catalog of books. It offers users a streamlined experience to browse, search, and view details about various literary works. The application aims to showcase a clean, user-friendly interface while demonstrating robust data handling and presentation capabilities.',
    },
    {
      title: 'Contacts List',
      desc: 'The Contacts List application is a web-based tool designed for efficient management of personal and professional contacts. It provides a straightforward and intuitive interface for users to organize their contacts, making it easy to add, view, edit, and categorize them. The application emphasizes usability and a clean design to ensure a smooth user experience.',
    },
  ];

  return (
    <Grid id="projects">
      <h2>Projects</h2>
      <Cards>
        {mock.map((p) => (
          <Card key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </Card>
        ))}
      </Cards>
    </Grid>
  );
}
