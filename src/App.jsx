import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Learning from './components/Learning'
import Education from './components/Education'
import Certifications from './components/Certifications'
import ResumeCta from './components/ResumeCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useCardSpotlight } from './hooks/useCardSpotlight'

export default function App() {
  useCardSpotlight()

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-lg bg-accent px-4 py-2 font-medium text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Learning />
        <Education />
        <Certifications />
        <ResumeCta />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
