import {
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine,
  RiArrowRightUpLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <RiMailLine size={32} />,
      link: "mailto:shafim1638@gmail.com",
      username: "MD Shahriar Hossain",
      color: "hover:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: <RiLinkedinLine size={32} />,
      link: "https://www.linkedin.com/in/md-shahriar-hossain-58b80a281/",
      username: "MD Shahriar Hossain",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <RiGithubLine size={32} />,
      link: "https://github.com/Shahriar1638",
      username: "MD Shahriar Hossain",
      color: "hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: <RiTwitterXLine size={32} />,
      link: "https://x.com/Shahriar1638",
      username: "MD Shahriar Hossain",
      color: "hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: <RiWhatsappLine size={32} />,
      link: "https://wa.me/8801906127394", // Replace with your number
      username: "Chat on WhatsApp",
      color: "hover:text-green-500",
    },
    {
      name: "Facebook",
      icon: <RiFacebookCircleLine size={32} />,
      link: "https://www.facebook.com/mdshahriarhossain.shafim/",
      username: "MD Shahriar Hossain",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col justify-center items-center relative overflow-hidden bg-(--bg-main) transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-(--text-main)">
          Get in <span className="text-accent">Touch</span>
        </h1>
        <p className="text-(--text-muted) text-lg max-w-2xl mx-auto font-light leading-relaxed">
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
            className="group p-8 rounded-2xl bg-(--bg-panel) border border-(--border-color) hover:border-accent/50 hover:bg-(--bg-panel)/80 transition-all duration-300 backdrop-blur-sm flex flex-col gap-4 shadow-lg hover:shadow-(--color-accent)/10"
          >
            <div
              className={`p-4 rounded-full bg-(--text-main)/5 w-fit group-hover:scale-110 transition-transform duration-300 ${social.color}`}
            >
              {social.icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 text-(--text-main)">
                {social.name}
              </h3>
              <p className="text-sm text-(--text-muted) group-hover:text-accent/80 transition-colors font-mono">
                {social.username}
              </p>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
              <RiArrowRightUpLine size={24} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
