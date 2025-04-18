import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SmoothScroll from './components/LenisScroll.jsx'

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient1'>
      <Header/>
      <SmoothScroll>
        <section id='Home'>
          <Hero/>
        </section>
        <Seperation/>
        <section id='Technologies'>
          <Skills/>
        </section>
        <Seperation/>
        <section id='Projects'>
          <Projects />
        </section>
        <Seperation/>
        <section id='About'>
          <About />
        </section>
      </SmoothScroll>
      <Footer/>
    </div>
  )
}

export default App