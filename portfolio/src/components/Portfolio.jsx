import React, { useEffect, useRef } from "react";
import project1 from "../images/recallrush.png";
import project2 from "../images/image.png";
import project3 from "../images/movies.png";
import project4 from "../images/cart.png";
import project5 from "../images/notes.png";
import project6 from "../images/tenzies.png";
import project7 from "../images/invest.png";
import project8 from "../images/pomodoro.png";

const projects = [
  {
    title: "Recall Rush",
    description: "Match pairs, remember locations, beat minimum moves in time.",
    image: project1,
    link: "https://recallrush.netlify.app/",
  },
  {
    title: "Pomodoro Timer",
    description:
      "Pomodoro timer with work time tracking and pause/reset controls.",
    image: project8,
    link: "https://time-chunker.netlify.app/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "Two players battle to align three symbols in a row.",
    image: project2,
    link: "https://tict-tact-toet.netlify.app/",
  },
  {
    title: "Movies Dashboard",
    description:
      "Movix streaming platform's homepage, showcasing trending and popular movies and TV shows.",
    image: project3,
    link: "https://movix-ten-kappa.vercel.app/",
  },
  {
    title: "Markdown Notes",
    description: "Markdown notes app with preview pane and list view.",
    image: project5,
    link: "https://yourecommerce.com",
  },
  {
    title: "Investment Calculator",
    description:
      "Investment calculator with inputs and growth projection table.",
    image: project7,
    link: "https://investo-calci.netlify.app/",
  },
  {
    title: "Tenzies Game",
    description: "Roll dice, freeze matches, aim for all same values.",
    image: project6,
    link: "https://tennziess-game.netlify.app/",
  },
  {
    title: "Add to Cart",
    description: "Cute shopping app interface with add-to-cart button.",
    image: project4,
    link: "https://my-groceriiis.netlify.app/",
  },
];

const Portfolio = () => {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered.current) {
          scrollContainer.scrollLeft += 1; // Adjust speed if needed

          // Seamless looping
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 15);
    };

    startScrolling();
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">My Projects</h2>
      <div
        ref={scrollRef}
        className="flex space-x-8 p-4 w-full max-w-6xl overflow-hidden"
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => (isHovered.current = false)}
        style={{ whiteSpace: "nowrap" }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-cyan-400/50 transition duration-300 transform hover:-translate-y-2 flex-shrink-0 w-80 flex flex-col"
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
              <p className="text-gray-400 text-sm mt-2 overflow-hidden text-ellipsis line-clamp-2">
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
