import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import About from "./pages/about";
import Home from "./pages/home";
import Body from "./Components/body";
import Navbar from "./Components/head";
import LaunchButton from "./pages/launch";
import "/index.css";
import { Routes, Route } from "react-router-dom";

// const Main = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/launch" element={<LaunchButton />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         {/* <Route path="/" element={Home} /> */}
//       </Routes>
//     </>
//   );
// };

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/launch" element={<LaunchButton />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default Main;
