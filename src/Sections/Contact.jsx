import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import SectionTitle from "../Components/SectionTitle";

const CONTACT_EMAIL = "pandyadarshan811@gmail.com";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_67gzt9o";
const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_iqclufp";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "PVjiiLT5X_8QjVDY0";

const SENDING_PHRASES = [
  "Launching",
  "In transit",
  "Almost there",
];

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendingPhrase, setSendingPhrase] = useState(SENDING_PHRASES[0]);
  const [status, setStatus] = useState({ type: "", message: "" });

  const form = useRef();

  useEffect(() => {
    if (!isSending) return;
    let index = 0;
    setSendingPhrase(SENDING_PHRASES[0]);
    const interval = setInterval(() => {
      index = (index + 1) % SENDING_PHRASES.length;
      setSendingPhrase(SENDING_PHRASES[index]);
    }, 1400);
    return () => clearInterval(interval);
  }, [isSending]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        const successMsg = "Message sent — I'll get back to you soon!";
        setStatus({ type: "success", message: successMsg });
        setIsSuccess(true);
        toast.success(successMsg);
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS failed:", error);
        const errorMsg = getEmailJsErrorMessage(error);
        setStatus({ type: "error", message: errorMsg });
        toast.error(errorMsg);
      })
      .finally(() => setIsSending(false));
  };

  const renderButtonContent = () => {
    if (isSuccess) {
      return (
        <>
          <FiCheck size={18} />
          <span>Delivered!</span>
        </>
      );
    }
    if (isSending) {
      return (
        <>
          <FiSend size={16} className="plane-icon" />
          <span>
            {sendingPhrase}
            <span className="sending-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
        </>
      );
    }
    return (
      <>
        <FiSend size={16} className="plane-icon" />
        <span>Send Message</span>
      </>
    );
  };

  return (
    <>
      <SectionTitle className="mt-24">#Contact</SectionTitle>
      <section
        id="contact"
        className="contact mx-6 md:mx-12 md:mb-28 mb-28 flex flex-col lg:flex-row items-center justify-center gap-12"
      >
        <div className="max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">
            Let's Connect
          </h2>
          <p className="text-gray-400 leading-7 mb-8 tracking-wide">
            Open to new opportunities and collaborations. Reach out directly or
            launch a message my way.
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

        <div className="max-w-md w-full glass-card relative overflow-hidden rounded-xl p-8 shadow-lg before:w-24 before:h-24 before:absolute before:bg-[#525CEB] before:rounded-full before:-z-10 before:blur-2xl before:top-0 before:left-0 after:w-32 after:h-32 after:absolute after:bg-[#6849f3] after:rounded-full after:-z-10 after:blur-xl after:bottom-0 after:right-0">
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
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
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
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
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
                className="form-input resize-none"
                rows="4"
                id="message"
                name="message"
                placeholder="Hey Darshan, I'd love to connect about..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSending}
              />
            </div>

            <div className="flex flex-col items-end gap-3">
              {status.message && (
                <p
                  role="alert"
                  className={`w-full text-sm tracking-wide rounded-lg px-4 py-3 ${
                    status.type === "success"
                      ? "bg-green-900/30 text-green-300 border border-green-700/60"
                      : "bg-red-900/30 text-red-300 border border-red-700/60"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending || isSuccess}
                className={`send-btn ${isSending ? "is-sending" : ""} ${isSuccess ? "is-success" : ""}`}
              >
                {renderButtonContent()}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
