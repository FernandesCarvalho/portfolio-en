import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProjectsGrid />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
