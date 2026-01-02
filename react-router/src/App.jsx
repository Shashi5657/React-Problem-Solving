import { lazy, Suspense, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import ProtectedLayout from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
//lazy loading
const About = lazy(() => import("./components/About"));

function App() {
  const [count, setCount] = useState(0);
  const userRole = "admins";

  //using query params for filters
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Conditional routes based on login role */}
          {userRole === "admin" && <Route path="/admin" element={<Admin />} />}

          {/* Private Routes  */}
          <Route element={<ProtectedLayout />}>
            <Route
              path="/about"
              element={
                <Suspense fallback={"Loading...."}>
                  <About />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
