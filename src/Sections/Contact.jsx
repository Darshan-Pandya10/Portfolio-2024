import React from 'react';

const Contact = () => {
  return (
    <section className='contact m-12'>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-[#525CEB] before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-[#6849f3] after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-wider">Get In Touch</h2>

        <form method="post" action="#">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="name">Full Name</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="email">Email</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 tracking-wider" htmlFor="message">Message</label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows="3"
              id="message"
              name="message"
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
    </section>
  );
};

export default Contact;
