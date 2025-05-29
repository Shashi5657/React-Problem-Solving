import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserStayedTimeOnPage from "./components/userStayedTimeOnPage";
import AutoSwitchTheme from "./components/AutoSwitchTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <UserStayedTimeOnPage />
      <AutoSwitchTheme />
    </>
  );
}

export default App;
