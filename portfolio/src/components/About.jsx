import React from "react";
import profilePic from "../images/prof.jpg";
import LeftSocialBar from "./LeftSocialbar";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12"
    >
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Shashidhar Sangepu
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mt-2">
          Frontend Developer
        </h2>
        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          Crafting responsive & dynamic user experiences using React.js, Node.js
          & MongoDB.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-cyan-500 rounded-full shadow-lg hover:bg-cyan-400 hover:shadow-cyan-500/50 transition-transform transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Profile Image */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl hover:scale-105 transform transition duration-500">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-12"
    >
      {/* Left Social Bar */}
      <LeftSocialBar />

      {/* Profile Image */}
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl hover:scale-105 transform transition duration-500">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Content */}
      <div className="text-center md:text-left md:ml-12 mt-6 md:mt-0 max-w-2xl">
        <h1 className="text-4xl md:text-5xl py-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Me
        </h1>
        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          Certified Frontend Developer with expertise in crafting dynamic and
          responsive user interfaces using the robust MERN stack—React.js,
          MongoDB, Express.js, and Node.js.
        </p>
        <div className="flex gap-6 justify-center md:justify-start mt-6">
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white">
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="text-gray-400">3+ Years</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white">
            <h3 className="text-xl font-semibold">Completed</h3>
            <p className="text-gray-400">10+ Projects</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg bg-gray-800 text-white">
            <h3 className="text-xl font-semibold">Support</h3>
            <p className="text-gray-400">Online 24/7</p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export { Home, About };
