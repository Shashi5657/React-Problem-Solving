import React from "react";

const experiences = [
  {
    company: "CAGEN TECHNOLOGIES",
    role: "Frontend Developer",
    duration: "Jul 2024 - Present",
    description: `
       Developed a scalable frontend architecture using Next.js, TypeScript, and Ant Design.
       Implemented Context API for authentication and protected routes.
       Designed dynamic form fields with custom validation for multiple input types.
       Integrated Google Maps API for inspector location tracking and polygon mapping.
       Created a modular, reusable table component with an interactive data management system.
       Managed API integrations (GET, POST, DELETE) with dynamic query parameters.
    `,
  },
  {
    company: "HulkHire",
    role: "Frontend Developer",
    duration: "Feb 2024 - Jun 2024",
    description: `
       Built interactive UI components using React.js, Tailwind CSS, and JavaScript.
       Integrated real-time payment status updates with asynchronous API calls and Webhooks.
       Applied lazy loading, code splitting, and rendering optimizations for better performance.
       Used React Hooks for efficient state management and modular code structure.
       Worked on SEO optimization and best practices for progressive web applications (PWA).
    `,
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
              <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                {exp.description
                  .trim()
                  .split("\n")
                  .map((point, i) => (
                    <li key={i}>{point.trim()}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
