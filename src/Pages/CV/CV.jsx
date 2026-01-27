import React from "react";
import { RiDownloadLine } from "react-icons/ri";

const CV = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center bg-[var(--bg-main)] transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-main)]">
          My <span className="text-[var(--color-accent)]">Resume</span>
        </h1>
        <p className="text-[var(--text-muted)] max-w-md mx-auto font-light">
          A detailed look at my professional journey, skills, and
          accomplishments.
        </p>
      </div>

      {/* Download Button */}
      <div className="mb-10">
        <a
          href="/MD_Shahriar_Hossain_cv.pdf"
          download="MD_Shahriar_Hossain_CV.pdf"
          className="group flex items-center gap-3 px-8 py-3 bg-[var(--text-main)] text-[var(--bg-main)] font-semibold rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-[0_0_15px_var(--border-color)] hover:shadow-[0_0_25px_var(--color-accent)]/40"
        >
          <span>Download CV</span>
          <RiDownloadLine
            size={20}
            className="group-hover:translate-y-1 transition-transform duration-300"
          />
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="w-full max-w-5xl aspect-[1/1.4] md:aspect-[16/9] lg:h-[80vh] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[var(--bg-panel)]">
        <iframe
          src="/MD_Shahriar_Hossain_cv.pdf"
          className="w-full h-full"
          title="CV Preview"
        />
      </div>
    </div>
  );
};

export default CV;
