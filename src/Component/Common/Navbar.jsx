import { useState } from "react";
import { Link } from "react-router";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My CV", path: "/cv" },
    { name: "All Projects", path: "/projects" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-light tracking-wide text-(--text-main)"
        >
          MD Shahriar
          <span className="font-bold text-accent">Hossain</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm uppercase tracking-widest text-(--text-muted) hover:text-(--text-main) transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-(--bg-panel) text-(--text-main) transition-colors"
          >
            {theme === "dark" ? (
              <RiSunLine size={20} />
            ) : (
              <RiMoonLine size={20} />
            )}
          </button>

          {/* Hire Me / Action Button */}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 text-xs font-bold uppercase tracking-widest border border-(--border-color) hover:bg-(--text-main) hover:text-(--bg-main) text-(--text-main) transition-all duration-300 rounded-full"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button + Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-(--bg-panel) text-(--text-main) transition-colors"
          >
            {theme === "dark" ? (
              <RiSunLine size={20} />
            ) : (
              <RiMoonLine size={20} />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-(--text-main) p-2 focus:outline-none"
          >
            {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-(--bg-main) border-b border-(--border-color) py-4 px-6 flex flex-col gap-4 shadow-2xl transition-colors duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-light text-(--text-muted) hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
