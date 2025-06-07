import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-blue-400">Daksh Valecha</h2>
          <p className="text-sm text-gray-400">Let’s connect and build something amazing 🚀</p>
        </div>

        <div className="flex space-x-5 text-2xl">
          <a
            href="mailto:dakshmv14@gmail.com"
            className="hover:text-red-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Daksh-14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daksh-valecha-802453289/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/dakshmv14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.codechef.com/users/daksh1105"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <SiCodechef />
          </a>
          <a
            href="https://codeforces.com/profile/dakshmv14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <SiCodeforces />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
