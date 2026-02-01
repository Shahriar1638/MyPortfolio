import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  RiGithubLine,
  RiArrowRightUpLine,
  RiArrowRightLine,
} from "react-icons/ri";

const Project = () => {
  const [projectsData, setProjectsData] = useState({
    web_applications: [],
    dl_ml_research: [],
    basic: [],
  });
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}projects.json?t=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((data) => {
        setProjectsData(data.projects);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  if (loading) return null;

  const allProjects = [
    ...(projectsData.web_applications || []).map((p) => ({
      ...p,
      category: "Web App",
    })),
    ...(projectsData.dl_ml_research || []).map((p) => ({
      ...p,
      category: "Research",
    })),
    ...(projectsData.basic || []).map((p) => ({
      ...p,
      category: "Game",
    })),
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-text-muted max-w-lg text-lg font-light leading-relaxed">
              A selection of web applications and research work demonstrating my
              technical capabilities.
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-text-main font-medium group hover:text-accent"
          >
            View All Projects
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-bg-panel border border-border-color rounded-2xl p-6 flex flex-col h-full hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                  {project.type}
                </div>

                <div className="flex flex-row items-center gap-3">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent text-xl"
                      title="View Code"
                    >
                      <RiGithubLine />
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted flex flex-row items-center hover:text-accent text-xl"
                      title="Visit Live Site"
                    >
                      <span className="mr-1 text-sm">Live Link</span>
                      <RiArrowRightUpLine />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent">
                {project.title}
              </h3>

              <p className="text-text-muted mb-6 line-clamp-3 leading-relaxed grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {(expandedProjects[index]
                  ? project.tags
                  : project.tags.slice(0, 4)
                ).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-bg-main border border-border-color text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpand(index);
                    }}
                    className="text-xs px-2 py-1 text-text-muted hover:text-accent cursor-pointer"
                  >
                    {expandedProjects[index]
                      ? "-"
                      : `+ ${project.tags.length - 4}`}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-text-main font-medium group hover:text-accent"
          >
            View All Projects
            <RiArrowRightLine className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
