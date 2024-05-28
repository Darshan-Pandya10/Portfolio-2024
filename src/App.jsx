import './App.css'
import About from './Components/About'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <main className='app min-h-screen border-2 border-solid border-black'>
        <Header/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
    </main>
  )
}

export default App
