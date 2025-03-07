import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import { Home, About } from "./components/About";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-[#0f0f0f] to-[#1f1f1f] text-white">
      <Navbar />
      <div className="pt-20">
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
