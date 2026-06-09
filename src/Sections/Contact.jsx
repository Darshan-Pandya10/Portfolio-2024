import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin } from "react-icons/fi";

const CONTACT_EMAIL = "pandyadarshan811@gmail.com";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_67gzt9o";
const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_iqclufp";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PVjiiLT5X_8QjVDY0";

const getEmailJsErrorMessage = (error) => {
  const text = error?.text || error?.message || "";
  if (text.includes("Invalid grant") || text.includes("Gmail_API")) {
    return "Email service needs to be reconnected in EmailJS dashboard. Please email directly for now.";
  }
  if (text) return text;
  return "Failed to send message. Please try again or email directly.";
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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
    setIsSending(true);
    setStatus({ type: "", message: "" });

    const options = { publicKey: PUBLIC_KEY };

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, options)
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        const successMsg = "Message sent successfully!";
        setStatus({ type: "success", message: successMsg });
        toast.success(successMsg);
      })
      .catch((error) => {
        console.error("EmailJS failed:", error);
        const errorMsg = getEmailJsErrorMessage(error);
        setStatus({ type: "error", message: errorMsg });
        toast.error(errorMsg);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <h1 className="title text-center mt-24 tracking-widest font-semibold uppercase text-2xl text-white">
        #Contact
      </h1>
      <section
        id="contact"
        className="contact m-6 md:m-12 md:mb-28 mt-8 mb-28 flex flex-col lg:flex-row items-center justify-center gap-12"
      >
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">
            Let's Connect
          </h2>
          <p className="text-gray-400 leading-7 mb-8 tracking-wide">
            Open to new opportunities and collaborations. Reach out directly or
            send a message through the form.
          </p>
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#6849f3] transition-colors group"
              >
                <span className="p-2 rounded-lg bg-[#6849f3]/15 group-hover:bg-[#6849f3]/25 transition-colors">
                  <HiOutlineMail size={22} className="text-[#6849f3]" />
                </span>
                <span className="tracking-wide">{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <span className="p-2 rounded-lg bg-[#6849f3]/15">
                <FiPhone size={20} className="text-[#6849f3]" />
              </span>
              <span className="tracking-wide">+91 7490924249</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <span className="p-2 rounded-lg bg-[#6849f3]/15">
                <FiMapPin size={20} className="text-[#6849f3]" />
              </span>
              <span className="tracking-wide">Ahmedabad, India</span>
            </li>
          </ul>
        </div>

        <div className="max-w-md w-full cursor-pointer relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-[#525CEB] before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-[#6849f3] after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-wider">
            Send a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} method="post" action="#">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300 tracking-wider"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSending}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300 tracking-wider"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSending}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-300 tracking-wider"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                rows="3"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSending}
              ></textarea>
            </div>

            <div className="flex flex-col items-end gap-3">
              {status.message && (
                <p
                  role="alert"
                  className={`w-full text-sm tracking-wide rounded-md px-3 py-2 ${
                    status.type === "success"
                      ? "bg-green-900/40 text-green-300 border border-green-700"
                      : "bg-red-900/40 text-red-300 border border-red-700"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <button
                className="bg-gradient-to-r from-[#525CEB] to-[#6849f3] tracking-widest text-white px-4 py-2 font-bold rounded-md hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
