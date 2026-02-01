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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
