import React from "react";
import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <RiMailLine size={32} />,
      link: "mailto:your.email@gmail.com",
      username: "your.email@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: <RiLinkedinLine size={32} />,
      link: "#",
      username: "linkedin.com/in/shahriar",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <RiGithubLine size={32} />,
      link: "#",
      username: "github.com/shahriar",
      color: "hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: <RiTwitterXLine size={32} />,
      link: "#",
      username: "@shahriar",
      color: "hover:text-white",
    },
    {
      name: "Facebook",
      icon: <RiFacebookCircleLine size={32} />,
      link: "#",
      username: "facebook.com/shahriar",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col justify-center items-center relative overflow-hidden bg-[var(--bg-main)] transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[30vw] h-[30vw] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text-main)]">
          Get in <span className="text-[var(--color-accent)]">Touch</span>
        </h1>
        <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Have a project in mind or just want to say hello? I'm always open to
          discussing new projects, creative ideas or opportunities to be part of
          your visions.
        </p>
      </div>

      {/* Social Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl relative z-10">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="group p-8 rounded-2xl bg-[var(--bg-panel)] border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--bg-panel)]/80 transition-all duration-300 backdrop-blur-sm flex flex-col gap-4 shadow-lg hover:shadow-[var(--color-accent)]/10"
          >
            <div
              className={`p-4 rounded-full bg-[var(--text-main)]/5 w-fit group-hover:scale-110 transition-transform duration-300 ${social.color}`}
            >
              {social.icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-[var(--text-main)]">
                {social.name}
              </h3>
              <p className="text-sm text-[var(--text-muted)] group-hover:text-[var(--color-accent)]/80 transition-colors font-mono">
                {social.username}
              </p>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[var(--color-accent)]">
              <RiArrowRightUpLine size={24} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
