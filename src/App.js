import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Awards from "./components/Awards";
import Portfolio from "./components/Portfolio";
import Cv from "./components/Cv";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
      <Portfolio />
      <Cv />
      <Contact />
    </main>
  );
}
