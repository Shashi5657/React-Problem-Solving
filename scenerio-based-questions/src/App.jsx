import "./App.css";
import UserStayedTimeOnPage from "./components/userStayedTimeOnPage";
import AutoSwitchTheme from "./components/AutoSwitchTheme";
import FileUploadProgress from "./components/FileUploadProgress";
import RestoreDeletedEmail from "./components/RestoreDeletedEmail";
import ArrayMethods from "./components/ArrayMethods";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <UserStayedTimeOnPage />
      <AutoSwitchTheme />
      <FileUploadProgress />
      <RestoreDeletedEmail />
      <ArrayMethods />
    </>
  );
}

export default App;
