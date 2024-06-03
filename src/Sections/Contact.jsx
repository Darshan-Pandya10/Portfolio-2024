import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wtm9m0q', 'template_iqclufp', form.current, {
        publicKey: 'PVjiiLT5X_8QjVDY0',
      })
      .then(
        () => {
          // Reset form fields after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          toast.success('Message Sent Successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Slide, 
          });
        })
      .catch((error) => {
        console.error('FAILED...', error);
        toast.error('Failed to send message.', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <>
      <h1 className='title text-center mt-24 tracking-widest font-semibold uppercase text-2xl text-white'>#Contact</h1>
    <section className='contact m-6 md:m-12 md:mb-28 mt-8 mb-28'>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-[#525CEB] before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-[#6849f3] after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-wider">Get In Touch</h2>

        <form ref={form} onSubmit={sendEmail} method="post" action="#">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="name">Full Name</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="email">Email</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="message">Message</label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="3"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-gradient-to-r from-[#525CEB] to-[#6849f3] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* ToastContainer should be outside of the form */}
      <ToastContainer />
    </section>
    </>
  );
};

export default Contact;
