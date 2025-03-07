import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my work, skills, and experience.",
    image: "https://via.placeholder.com/400", // Replace with actual project image
    link: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce website with payment integration and product management.",
    image: "https://via.placeholder.com/400", // Replace with actual project image
    link: "https://yourecommerce.com",
  },
  {
    title: "Dashboard Portal",
    description:
      "An interactive dashboard for monitoring and analytics with real-time data.",
    image: "https://via.placeholder.com/400", // Replace with actual project image
    link: "https://yourdashboard.com",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-cyan-400/50 transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-cyan-300">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-gray-900 font-semibold rounded-lg hover:bg-cyan-400 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
