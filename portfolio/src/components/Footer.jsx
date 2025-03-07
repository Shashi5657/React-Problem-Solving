import React from "react";
// If you don’t have react-icons installed, run: npm install react-icons
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/60 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Footer Left: Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Shashidhar Sangepu. All rights
            reserved.
          </p>
        </div>

        {/* Footer Right: Social Icons */}
        <div className="flex space-x-6 justify-center">
          {/* GitHub */}
          <a
            href="https://github.com/shashi5657"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shashidharsangepu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Twitter */}
          <a
            href="https://www.instagram.com/mr.villain29/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
