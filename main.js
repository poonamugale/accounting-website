import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import About from "./src/Components/about";
import Home from "./src/Components/home";
import Navbar from "./src/Components/navbar";
import LaunchButton from "./src/pages/launch";
import "/index.css";
import ClientSpread from "./src/pages/client-spread";
import Footer from "./src/Components/footer";
import { Routes, Route } from "react-router-dom";
import Blogs from "./src/pages/blogs";
import Article from "./src/pages/articles";
import ArticleDetail from "./src/pages/articleDetail";
import Section3 from "./src/Components/home";
import ServiceDetail from "./src/pages/serviceDetail";
import AllServices from "./src/pages/allServices";
import Careers from "./src/Components/careers";
import ContactPage from "./src/Components/contact";
import DirectTaxes from "./src/pages/directTaxes";
import IndirectTaxes from "./src/pages/indirectTaxes";
import StatutoryInternalAuditing from "./src/pages/statutoryInternalAuditing";
import LimitedReview from "./src/pages/limitedReview";
import ProjectFinances from "./src/pages/projectFinances";
import ApplyJob from "./src/pages/careersApply";
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
          path="/about"
          element={
            <>
              <Navbar />

              <About />

              <Footer />
            </>
          }
        />
        <Route
          path="/clientSpread"
          element={
            <>
              <Navbar />
              <ClientSpread />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          }
        />

        <Route path="/service/:title" element={<ServiceDetail />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route exact path="/articles" component={<Article />} />
        <Route
          path="/articles/:id"
          element={
            <>
              <Navbar />
              <ArticleDetail />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/careers"
          element={
            <>
              <Navbar />
              <Careers />
              <Footer />
            </>
          }
        />
        <Route path="/apply/:title" element={<ApplyJob />} />

        <Route
          exact
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/direct-taxation"
          element={
            <>
              <Navbar />
              <DirectTaxes />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/indirect-taxation"
          element={
            <>
              <Navbar />
              <IndirectTaxes />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/Statutory and Internal Auditing"
          element={
            <>
              <Navbar />
              <StatutoryInternalAuditing />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/Limited-Review"
          element={
            <>
              <Navbar />
              <LimitedReview />
              <Footer />
            </>
          }
        />
        <Route
          path="/services/Project-Finances"
          element={
            <>
              <Navbar />
              <ProjectFinances />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Main;
