import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CV from "./components/CV";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header>
        <Navbar />
        <CV />
      </Header>
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
