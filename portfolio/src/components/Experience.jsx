import React from "react";

const experiences = [
  {
    company: "Company A",
    role: "Frontend Developer",
    duration: "Jan 2023 - Present",
    description:
      "Developed interactive UIs using React.js and Next.js, optimizing performance and user experience.",
  },
  {
    company: "Company B",
    role: "Full Stack Developer",
    duration: "Jul 2021 - Dec 2022",
    description:
      "Built scalable backend APIs using Node.js and Express, integrated MongoDB, and optimized RESTful endpoints.",
  },
  {
    company: "Company C",
    role: "Web Developer Intern",
    duration: "Mar 2020 - Jun 2021",
    description:
      "Worked on responsive UI components, collaborated with teams, and contributed to open-source projects.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">Experience</h2>
      <div className="relative border-l-4 border-cyan-400 pl-6 space-y-12 max-w-3xl w-full">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-7 top-2 w-5 h-5 bg-cyan-400 rounded-full group-hover:animate-pulse"></div>
            <div className="bg-black/60 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/50 transition duration-300">
              <h3 className="text-xl font-semibold text-cyan-300">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
