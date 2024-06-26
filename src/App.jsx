import './App.css';
import About from './Sections/About';
import Contact from './Sections/Contact';
import Experience from './Sections/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Slide } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const ViewportHeight = window.innerHeight;

      setShowScrollToTop(scrollPosition > ViewportHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className='app transition-all relative min-h-screen border-2 border-solid border-black'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Slide
      />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-28 z-49 right-1 md:right-8 p-2 text-white rounded-full shadow-md border-2 border-solid border-white'
        >
          <IoIosArrowUp size={26} />
        </button>
      )}
    </main>
  );
}

export default App;
