import mecaniko from '../assets/images/Mecaniko.webp';
import food from '../assets/images/e-food.webp';
import books from '../assets/images/Minibooks.webp';
import contacts from '../assets/images/ContactList.webp';
const projects = [
  {
    title: 'E-Food',
    image: food,
    description: 'A food delivery interface for exploring restaurants and their menus.',
    focus: 'Focus: restaurant discovery and a clear browsing experience.',
    url: 'https://ebac-efood-sigma.vercel.app/',
  },
  {
    title: 'Mini-Books',
    image: books,
    description: 'An online book catalog for browsing, searching and exploring titles.',
    focus: 'Focus: finding information and presenting book details.',
    url: 'https://mini-books-eta.vercel.app/',
  },
  {
    title: 'Contacts List',
    image: contacts,
    description: 'A practical application for adding, editing and organizing contacts.',
    focus: 'Focus: straightforward forms and everyday data management.',
    url: 'https://contacts-list-two.vercel.app/',
  },
];
export default function ProjectsGrid() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title">Selected projects</h2>
      <p className="section-intro">
        Applications built around practical workflows and clear interfaces.
      </p>
      <article className="featured-project">
        <div>
          <p className="eyebrow">Featured project · Full-stack application</p>
          <h3>Mecaniko</h3>
          <p>
            A management platform that brings workshop operations into one place: repair orders,
            customers, vehicles, inventory and finances.
          </p>
        </div>
        <img
          src={mecaniko}
          alt="Mecaniko workshop management interface"
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
        />
        <p className="tech-stack">React · Next.js · TypeScript · NestJS · Prisma · PostgreSQL</p>
        <div className="case-study">
          <div>
            <h4>The problem</h4>
            <p>
              Workshop teams need to keep track of connected information throughout a repair, from
              the initial estimate to approval and delivery.
            </p>
          </div>
          <div>
            <h4>My contribution</h4>
            <p>
              Designed and developed the platform from the ground up, connecting operational
              workflows with responsive interfaces and business logic.
            </p>
          </div>
          <div>
            <h4>What to explore</h4>
            <p>
              Repair orders, estimates, approvals, inventory, warranties and rental fleet
              management.
            </p>
          </div>
        </div>
        <div className="actions">
          <a
            className="button"
            href="https://garage-app-blush-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Mecaniko ↗
          </a>
          <a href="mailto:fernandes.ventura25@gmail.com?subject=Mecaniko%20walkthrough">
            Request a walkthrough
          </a>
        </div>
      </article>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title + ' application screenshot'}
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.focus}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Explore {project.title} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="repository-link">
        Explore my public repositories on{' '}
        <a href="https://github.com/FernandesCarvalho" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        .
      </p>
    </section>
  );
}
