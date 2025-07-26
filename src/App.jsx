import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About/About";
import MasterLayout from "./Components/Home/MasterLayout/MasterLayout";
import Experience from "./Components/Home/Experience/Experience";
import Sidebar from "./Components/Home/Sidebar/Sidebar";
import Skills from "./Components/Home/Skills/Skills";
import Work from "./Components/Home/Work/Work";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/Home/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "exp", element: <Experience /> },
        { path: "work", element: <Work /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
