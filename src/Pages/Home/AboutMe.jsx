import { RiUserSmileLine } from "react-icons/ri";

const AboutMe = () => {
  return (
    <section className="py-24 relative z-10 bg-(--bg-main) transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-col gap-12 items-center text-justify justify-center">
          {/* Header / Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-(--text-main)">
            About <span className="text-accent">Me</span>
          </h2>

          {/* Content */}
          <div className="md:w-2/3 space-y-6 text-(--text-muted) text-lg leading-relaxed font-light">
            <p className="hover:text-(--text-main) transition-colors duration-300">
              I’m a{" "}
              <strong className="text-accent font-medium">
                backend-focused full-stack developer
              </strong>{" "}
              who enjoys designing clean, scalable, responsive and reliable
              systems. I’m especially interested in backend engineering REST API
              design , authentication flows, RBAC, database modeling, and
              optimizing data pipelines to reduce redundant network overhead.
            </p>

            <p className="hover:text-(--text-main) transition-colors duration-300">
              I mainly work with the{" "}
              <strong className="text-accent font-medium">MERN stack</strong>,{" "}
              SQL/NoSQL databases with modern frontend tools like React,
              Tailwind, TanStack Query, and Axios to build smooth, end-to-end
              experiences. I’m comfortable working across the full stack as
              needed. My real strength and interest lie in backend + Frontend
              architecture design and system-level problem solving.
            </p>

            <p className="hover:text-(--text-main) transition-colors duration-300">
              I also have complementary experience in{" "}
              <strong className="text-accent font-medium">DL/ML</strong> using
              PyTorch and TensorFlow, which helps me approach engineering
              challenges with a more analytical and data-driven mindset. I’m
              currently looking to grow as a{" "}
              <strong className="text-accent font-medium">
                Full-Stack Developer/ Backend Developer/ Backend Engineer
              </strong>{" "}
              contributing to secure, well-structured, and production-ready
              systems.
            </p>

            {/* Academic Info */}
            <div className="pt-6 mt-6 border-t border-(--border-color)">
              <h3 className="text-2xl font-bold text-(--text-main) mb-6">
                Academic <span className="text-accent">Info</span>
              </h3>

              <div className="space-y-8">
                {/* University */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-xl font-medium text-accent group-hover:text-accent/80 transition-colors">
                      Bachelor of Computer Science
                    </h4>
                    <span className="text-sm font-mono text-(--text-muted) bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      2022 – 2026
                    </span>
                  </div>
                  <p className="text-lg text-(--text-main) font-medium">
                    BRAC University
                  </p>
                  <div className="text-base text-(--text-muted) mt-2 space-y-1">
                    <p>
                      120/124 Credits Completed (Thesis Defense: Expected Fall
                      2026)
                    </p>
                    <p>
                      CGPA: <span className="text-accent font-bold">3.29</span>
                    </p>
                  </div>
                </div>

                {/* College */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-xl font-medium text-accent group-hover:text-accent/80 transition-colors">
                      Higher Secondary Certificate
                    </h4>
                    <span className="text-sm font-mono text-(--text-muted) bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      2020
                    </span>
                  </div>
                  <p className="text-lg text-(--text-main) font-medium">
                    Monipur High School and College
                  </p>
                  <div className="text-base text-(--text-muted) mt-2">
                    <p>
                      GPA: <span className="text-accent font-bold">4.17</span>
                    </p>
                  </div>
                </div>

                {/* School */}
                <div className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h4 className="text-xl font-medium text-accent group-hover:text-accent/80 transition-colors">
                      Secondary School Certificate
                    </h4>
                    <span className="text-sm font-mono text-(--text-muted) bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      2018
                    </span>
                  </div>
                  <p className="text-lg text-(--text-main) font-medium">
                    Mirpur Bangla School and College
                  </p>
                  <div className="text-base text-(--text-muted) mt-2">
                    <p>
                      GPA: <span className="text-accent font-bold">4.22</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
