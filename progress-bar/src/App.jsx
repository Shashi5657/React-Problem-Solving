import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);

  const getColor = (value) => {
    if (value <= 30) return "red";
    if (value > 30 && value <= 70) return "pink";
    return "green";
  };

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          color: animatedProgress < 3 ? "black" : "white",
          backgroundColor: `${getColor(animatedProgress)}`,
          transform: `translateX(${animatedProgress - 100}%)`, //for animations we should always prefer transform instead of width
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

function App() {
  const arrayNums = [1, 10, 30, 50, 100];

  return (
    <div>
      {arrayNums.map((item, index) => (
        <ProgressBar key={index} progress={item} />
      ))}
    </div>
  );
}

export default App;
