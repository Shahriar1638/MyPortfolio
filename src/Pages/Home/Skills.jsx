import Marquee from "react-fast-marquee";
import pythonIcon from "../../assets/Icons/python-original.svg";
import htmlIcon from "../../assets/Icons/html5-original.svg";
import cssIcon from "../../assets/Icons/css3-original.svg";
import jsIcon from "../../assets/Icons/javascript-original.svg";
import nodeIcon from "../../assets/Icons/nodejs-original.svg";
import expressIcon from "../../assets/Icons/express-original.svg";
import reactIcon from "../../assets/Icons/react-original.svg";
import mongoIcon from "../../assets/Icons/mongodb-original.svg";
import sqlIcon from "../../assets/Icons/sqldeveloper-original.svg";
import mysqlIcon from "../../assets/Icons/mysql-original.svg";
import pytorchIcon from "../../assets/Icons/pytorch-original.svg";
import tensorflowIcon from "../../assets/Icons/tensorflow-original.svg";
import cIcon from "../../assets/Icons/c-original.svg";
import phpIcon from "../../assets/Icons/php-original.svg";
import firebaseIcon from "../../assets/Icons/firebase-original.svg";
import githubIcon from "../../assets/Icons/github-original.svg";
import vercelIcon from "../../assets/Icons/vercel-original.svg";
import gitIcon from "../../assets/Icons/git-icon-logo-svgrepo-com.svg";

const Skills = () => {
  const skillsRow1 = [
    { name: "Python", icon: pythonIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express", icon: expressIcon, forceWhite: true },
    { name: "React", icon: reactIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Git", icon: gitIcon },
  ];

  const skillsRow2 = [
    { name: "SQL", icon: sqlIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "PyTorch", icon: pytorchIcon },
    { name: "TensorFlow", icon: tensorflowIcon },
    { name: "C (Basics)", icon: cIcon },
    { name: "PHP (Basics)", icon: phpIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "GitHub", icon: githubIcon, forceWhite: true },
    { name: "Vercel", icon: vercelIcon, forceWhite: true },
  ];
  const renderSkillCard = (skill, index) => (
    <div
      key={index}
      className="mx-4 md:mx-6 flex flex-col items-center group gap-3 cursor-pointer"
    >
      <div className="w-28 h-16 md:w-36 md:h-20 p-4 rounded-xl bg-(--bg-panel) border border-accent/20 group-hover:border-accent group-hover:bg-text-main/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          style={
            skill.forceWhite
              ? {
                  filter: "var(--icon-filter, none)",
                }
              : {}
          }
          className="w-full h-full object-contain transition-all duration-300 transform group-hover:scale-110"
        />
      </div>
      <span className="text-xs md:text-sm font-mono text-(--text-muted) group-hover:text-accent transition-colors">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col gap-8">
          {/* Row 1 */}
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left"
            className="overflow-hidden"
          >
            {skillsRow1.map((skill, index) => renderSkillCard(skill, index))}
          </Marquee>

          {/* Row 2 */}
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="right"
            className="overflow-hidden"
          >
            {skillsRow2.map((skill, index) => renderSkillCard(skill, index))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
