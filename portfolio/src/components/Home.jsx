import React from "react";
import profilePic from "../images/prof.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 md:px-16 py-12"
    >
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Shashidhar Sangepu
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mt-2 flex justify-center items-center">
          <span className="w-25 h-[2px] bg-gray-400 mr-3"></span>
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
            Wave at Me 👋
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

export default Home;
