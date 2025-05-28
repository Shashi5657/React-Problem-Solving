import "./App.css";
import UserStayedTimeOnPage from "./components/userStayedTimeOnPage";
import AutoSwitchTheme from "./components/AutoSwitchTheme";
import FileUploadProgress from "./components/FileUploadProgress";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <UserStayedTimeOnPage />
      <AutoSwitchTheme />
      <FileUploadProgress />
    </>
  );
}

export default App;
