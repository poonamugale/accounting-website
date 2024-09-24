import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import About from "./src/pages/about";
import Home from "./src/pages/home";
import Navbar from "./src/Components/navbar";
import LaunchButton from "./src/pages/launch";
import "/index.css";
import Footer from "./src/Components/footer";
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
        {/* <Navbar /> */}
        <Route path="/launch" element={<LaunchButton />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <Navbar />

              <About />
              <Footer />
            </>
          }
        />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </>
  );
};

export default Main;
