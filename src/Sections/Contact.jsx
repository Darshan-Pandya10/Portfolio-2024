import React from 'react'

const Contact = () => {
  return (
    <section className='contact m-12'>

  <main id='contact' className="contact-card">
    <div className="p-4 md:p-6 rounded-lg w-full sm:w-[20rem] bg-blue-50 dark:bg-gray-800">
      <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </span>

      <h2 className="mt-4 text-xl tracking-wider font-medium text-gray-800 dark:text-white">Get in touch</h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">I would love to hear from you</p>
      <a target='_blank' href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pandyadarshan811@gmail.com' className="mt-2 text-sm text-blue-500 dark:text-blue-400">Mail Me.</a>
    </div>
  </main>
</section>

  )
}

export default Contact
