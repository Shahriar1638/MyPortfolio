import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      {/* Footer / Social Proof */}
      <div className="mt-24 md:mt-32 border-t border-white/5 pt-8 flex justify-between items-center text-gray-500 text-sm tracking-wide">
        <div className="flex gap-6">
          <a href="#" className="hover:text-amber-500 transition-colors">
            <RiGithubLine size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <RiLinkedinLine size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <RiTwitterXLine size={20} />
          </a>
        </div>
        <div>
          <span>BASED IN USA / REMOTE</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
