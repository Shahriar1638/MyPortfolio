import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full relative z-10 bg-(--bg-main) text-(--text-muted) transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-(--border-color) pt-8">
          {/* Copyright / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-(--text-main) tracking-wide mb-1">
              MD Shahriar Hossain
            </h3>
            <p className="text-sm font-light opacity-80">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Location Tag */}
          <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase opacity-70">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Based in Bangladesh / Remote
          </div>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Shahriar1638"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-muted) hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <RiGithubLine size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shahriar-hossain-58b80a281/"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-muted) hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <RiLinkedinLine size={24} />
            </a>
            <a
              href="https://x.com/Shahriar1638"
              target="_blank"
              rel="noreferrer"
              className="text-(--text-muted) hover:text-accent transition-all duration-300 transform hover:scale-110"
              aria-label="Twitter X"
            >
              <RiTwitterXLine size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
