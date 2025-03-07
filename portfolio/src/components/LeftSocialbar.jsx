import React from "react";
// If you don’t have react-icons installed, run: npm install react-icons
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const LeftSocialBar = () => {
  return (
    <div
      className="
        hidden
        md:flex
        flex-col
        fixed
        top-1/2
        left-2
        -translate-y-1/2
        space-y-4
        z-50
      "
    >
      {/* GitHub */}
      <a
        href="https://github.com/shashi5657"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
      >
        <FaGithub size={22} className="text-white hover:text-gray-900" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shashidharsangepu/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
      >
        <FaLinkedin size={22} className="text-white hover:text-gray-900" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/mr.villain29/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors"
      >
        <FaInstagram size={22} className="text-white hover:text-gray-900" />
      </a>
    </div>
  );
};

export default LeftSocialBar;
