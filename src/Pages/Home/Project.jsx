/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiGithubLine,
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

const Project = () => {
  const [projectsData, setProjectsData] = useState({
    web_applications: [],
    dl_ml_research: [],
    basic: [],
  });
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleDetails = (index) => {
    setExpandedDetails((prev) => ({
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>
        </div>

        {/* Backdrop for Focus Mode */}
        <AnimatePresence>
          {Object.values(expandedDetails).some((isOpen) => isOpen) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedDetails({})}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-300"
            />
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {allProjects.map((project, index) => (
            <motion.div
              layout
              key={index}
              className={`group bg-bg-panel border rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                expandedDetails[index]
                  ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl max-h-[90vh] overflow-y-auto border-accent shadow-[0_0_50px_rgba(168,85,247,0.2)]"
                  : "relative h-full border-border-color hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]"
              }`}
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

              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent min-h-16 line-clamp-2">
                {project.title}
              </h3>

              <div className="grow mb-6">
                <div className="text-text-muted mb-4 leading-relaxed">
                  {expandedDetails[index] ? (
                    <div>
                      {project.description}{" "}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDetails(index);
                        }}
                        className="text-accent text-sm font-medium inline-flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer"
                      >
                        See Less <RiArrowUpSLine />
                      </button>
                    </div>
                  ) : (
                    <div>
                      {project.description.slice(0, 100) +
                        (project.description.length > 100 ? "..." : "")}{" "}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDetails(index);
                        }}
                        className="text-accent text-sm font-medium inline-flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer"
                      >
                        Details <RiArrowDownSLine />
                      </button>
                    </div>
                  )}
                </div>

                {/* Key Achievements - Collapsible */}
                <AnimatePresence>
                  {expandedDetails[index] &&
                    project.key_achievements &&
                    project.key_achievements.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-l-2 border-accent/20 pl-4 ml-1 overflow-hidden"
                      >
                        <ul className="list-disc list-outside ml-4 space-y-2">
                          {project.key_achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-text-muted text-sm leading-relaxed"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>

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
            </motion.div>
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
