import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
