import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-t from-[#0f0f0f] to-[#1f1f1f] text-white">
      <Navbar />
      <div className="pt-10 w-full">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>

      {/* Always available ChatBot */}
      <ChatBot />

      <Footer />
    </div>
  );
}

export default App;
