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
      <article className="featured-project" aria-labelledby="mecaniko-title">
        <div className="featured-heading">
          <span className="eyebrow">Flagship project</span>
          <span className="ownership-badge">Designed & built entirely by me</span>
        </div>
        <div className="featured-main">
          <div className="featured-copy">
            <h3 id="mecaniko-title">
              Mecaniko<span>.</span>
            </h3>
            <p className="featured-tagline">Your workshop. One connected workspace.</p>
            <p className="featured-description">
              Keep repairs, customers and your business connected, from the first estimate to the
              final handover. Built around the way workshops work.
            </p>
            <ul className="product-benefits">
              <li>
                <strong>Keep repairs moving</strong>
                <span>Orders, estimates and approvals in one workflow.</span>
              </li>
              <li>
                <strong>Stay in control</strong>
                <span>Customers, vehicles, stock and finances together.</span>
              </li>
              <li>
                <strong>Go beyond the repair</strong>
                <span>Manage warranties and your rental fleet.</span>
              </li>
            </ul>
            <div className="actions">
              <a
                className="button"
                href="mailto:fernandes.ventura25@gmail.com?subject=Mecaniko%20demo%20for%20my%20workshop"
              >
                Book a demo ↗
              </a>
              <a
                className="product-link"
                href="https://garage-app-blush-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore the platform ↗
              </a>
            </div>
          </div>
          <div className="featured-visual">
            <span className="product-label">WORKSHOP MANAGEMENT SOFTWARE</span>
            <img
              src={mecaniko}
              alt="Mecaniko repair management dashboard on desktop and mobile"
              width="1280"
              height="720"
              loading="lazy"
              decoding="async"
            />
            <p>One platform, from reception to delivery.</p>
          </div>
        </div>
        <details className="project-details">
          <summary>
            Behind the product <span>My role & technology</span>
          </summary>
          <div className="project-details-body">
            <p>
              I created Mecaniko independently, from the product concept and interface design to the
              front end, back end and database. I brought the different stages of a workshop's day
              into a single application, connecting repair workflows with the operational tools
              workshop teams need.
            </p>
            <p className="mobile-capabilities">
              Manage repair orders, estimates, approvals, customers, vehicles, inventory, finances,
              warranties and your rental fleet in one platform.
            </p>
            <p className="tech-stack">
              <strong>Built with</strong> React · Next.js · TypeScript · NestJS · Prisma ·
              PostgreSQL
            </p>
            <a href="mailto:fernandes.ventura25@gmail.com?subject=Mecaniko%20for%20my%20business">
              Let's talk about Mecaniko for your workshop ↗
            </a>
          </div>
        </details>
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
