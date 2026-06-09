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
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <main className="app transition-all relative min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        style={{ zIndex: 9999 }}
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
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={26} />
        </button>
      )}
    </main>
  );
}

export default App;
