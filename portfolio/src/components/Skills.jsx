import React from "react";

const skills = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "ReactJs", percentage: 85 },
  { name: "NextJs", percentage: 80 },
  { name: "React Native", percentage: 70 },
  { name: "Node & Express", percentage: 80 },
  { name: "MongoDB", percentage: 80 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <svg
                className="w-24 h-24 transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  className="text-gray-700 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-cyan-400 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * skill.percentage) / 100}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                {skill.percentage}%
              </span>
            </div>
            <p className="mt-3 text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
