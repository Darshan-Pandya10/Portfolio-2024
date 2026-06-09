import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <div className={`section-title-wrap ${className}`}>
      <h1 className="section-title">{children}</h1>
      <span className="section-title-line" aria-hidden="true" />
    </div>
  );
};

export default SectionTitle;
