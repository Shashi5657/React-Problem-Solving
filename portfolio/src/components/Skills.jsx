import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAntdesign,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    percentage: 90,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    percentage: 75,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" />,
    percentage: 80,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
    percentage: 85,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    percentage: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    percentage: 65,
  },
  {
    name: "ReactJs",
    icon: <FaReact className="text-cyan-400" />,
    percentage: 85,
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    percentage: 80,
  },
  {
    name: "ExpressJs",
    icon: <SiExpress className="text-white dark:text-white" />,
    percentage: 70,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs className="text-green-500" />,
    percentage: 75,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    percentage: 65,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-700" />,
    percentage: 70,
  },
  { name: "Git", icon: <FaGit className="text-red-600" />, percentage: 85 },
  {
    name: "ANTD",
    icon: <SiAntdesign className="text-blue-400" />,
    percentage: 80,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-md shadow-md"
          >
            {/* Skill Icon */}
            <div className="text-4xl flex-shrink-0">{skill.icon}</div>

            {/* Name + Progress Bar */}
            <div className="flex flex-col w-full">
              {/* Skill name and percentage on top */}
              <div className="flex justify-between">
                <span className="text-white font-semibold text-lg">
                  {skill.name}
                </span>
                <span className="text-white font-semibold text-lg">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full mt-2">
                <div
                  className="h-3 bg-cyan-400 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
