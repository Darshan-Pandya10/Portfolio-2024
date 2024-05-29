import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import { IoIosArrowUp } from "react-icons/io";

function App() {

  return (
    <main className='app relative min-h-screen border-2 border-solid border-black'>
        <Header/>
        <About/>
        <Skills/>
        <a href='#header' className='inline-block fixed z-50 bottom-4 left-1 text-white border-2 text-center borer-solid border-white p-1'><IoIosArrowUp size={26}/></a>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App
