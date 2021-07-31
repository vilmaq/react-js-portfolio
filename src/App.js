import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import Portfolio from "./components/Portfolio";
import Cv from "./components/Cv";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      {/* <Experience />
      <Education /> */}
      {/* <Skills />
      <Interests /> */}
      <Portfolio />
      {/* <Cv /> */}
      <Contact />
    </main>
  );
}
