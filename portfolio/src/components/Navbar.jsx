import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/70 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-200 transition-colors"
        >
          MyPortfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition-colors hover:text-cyan-300"
              >
                {link.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-400"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90">
          <ul className="flex flex-col space-y-4 p-4 font-medium">
            {navigationLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-700 pb-2">
                <a
                  href={link.href}
                  className="block w-full text-cyan-300 hover:text-cyan-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
