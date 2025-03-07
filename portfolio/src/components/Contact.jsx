import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">Contact Me</h2>
      <div className="bg-black/60 p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 rounded-md bg-gray-900 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 text-gray-900 font-semibold py-3 rounded-md hover:bg-cyan-400 transition transform hover:scale-105"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
