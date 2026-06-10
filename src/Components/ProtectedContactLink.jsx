import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { getEmail, getPhoneDisplay, getPhoneTel } from "../utils/contactInfo";

const ProtectedContactLink = ({ type, icon: Icon }) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const isEmail = type === "email";
  const label = isEmail ? "email" : "phone number";
  const value = isEmail ? getEmail() : getPhoneDisplay();
  const href = isEmail ? `mailto:${getEmail()}` : `tel:${getPhoneTel()}`;

  const handleReveal = () => setRevealed(true);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(isEmail ? getEmail() : getPhoneDisplay());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={handleReveal}
        className="flex items-center gap-3 w-full text-left text-gray-300 hover:text-[#6849f3] transition-colors group"
      >
        <span className="p-2 rounded-lg bg-[#6849f3]/15 group-hover:bg-[#6849f3]/25 transition-colors">
          <Icon size={isEmail ? 22 : 20} className="text-[#6849f3]" />
        </span>
        <span className="tracking-wide text-sm sm:text-base">
          Show {label}
          <span className="block text-xs text-gray-500 font-normal mt-0.5">
            Tap to reveal
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3 text-gray-300 group">
      <a
        href={href}
        className="flex items-center gap-3 flex-1 min-w-0 text-gray-300 hover:text-[#6849f3] transition-colors"
      >
        <span className="p-2 rounded-lg bg-[#6849f3]/15 group-hover:bg-[#6849f3]/25 transition-colors shrink-0">
          <Icon size={isEmail ? 22 : 20} className="text-[#6849f3]" />
        </span>
        <span className="tracking-wide break-all text-sm sm:text-base">{value}</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="shrink-0 p-2 rounded-lg border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#6849f3]/40 transition-colors"
      >
        {copied ? <FiCheck size={16} className="text-green-400" /> : <FiCopy size={16} />}
      </button>
    </div>
  );
};

export default ProtectedContactLink;
