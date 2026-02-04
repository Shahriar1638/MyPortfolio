import { Link } from "react-router";

import { RiArrowRightLine, RiGithubLine } from "react-icons/ri";
import Skills from "./Skills";
import Project from "./Project";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <div className="bg-bg-main text-text-main selection:bg-accent/30 overflow-x-hidden transition-colors duration-300">
      {/* ---------------- HERO SECTION ---------------- */}
      <div className="min-h-screen flex flex-col justify-center relative">
        {/* Background Ambient Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-text-main/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
          {/* Intro Tag */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              Software Engineer | Backend • Full-Stack • Database
            </span>
          </div>

          {/* Headline */}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-tr from-(--text-main) to-(--text-muted)">
              MD Shahriar <br />
              Hossain
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-(--text-muted) text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
            A backend-focused full-stack developer who builds clean, scalable,
            and reliable web systems.
          </p>

          {/* Call to Action */}
          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-(--text-main) text-(--bg-main) font-semibold rounded-full flex items-center gap-2 hover:bg-(--text-muted) transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Explore Work
              <RiArrowRightLine className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 border border-(--border-color) rounded-full font-medium hover:bg-(--bg-panel) transition-all duration-300 text-(--text-muted) hover:text-(--text-main) hover:border-(--text-main)/30"
            >
              Contact Me
            </Link>

            <a
              href="https://github.com/Shahriar1638"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-(--border-color) rounded-full font-medium hover:bg-(--bg-panel) transition-all duration-300 text-(--text-muted) hover:text-(--text-main) hover:border-(--text-main)/30 flex items-center gap-2"
            >
              <RiGithubLine className="text-xl" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- ABOUT ME SECTION ---------------- */}
      <AboutMe />

      {/* ---------------- SKILLS SECTION ---------------- */}
      <div className="py-24 relative z-10 animate-gradient-shift bg-linear-to-r from-bg-main via-accent/30 to-bg-main">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-accent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto font-light">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Marquee Container with responsive padding */}
        <Skills />
      </div>

      {/* ---------------- PROJECT SECTION ---------------- */}
      <div id="projects">
        <Project />
      </div>
    </div>
  );
};

export default Home;
