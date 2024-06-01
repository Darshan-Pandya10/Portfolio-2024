import './App.css'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Experience from './Sections/Experience'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Sections/Projects'
import Skills from './Sections/Skills'
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const twoViewportHeight = window.innerHeight;

      setShowScrollToTop(scrollPosition > twoViewportHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='app relative min-h-screen border-2 border-solid border-black'>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {/* Conditional rendering of scroll-to-top button */}
      {showScrollToTop && (
        <a href='#header' className='fixed bottom-28 right-8 p-2 text-white rounded-full shadow-md border-2 border-solid border-white'>
          <IoIosArrowUp size={26} />
        </a>
      )}
    </main>
  )
}

export default App;
