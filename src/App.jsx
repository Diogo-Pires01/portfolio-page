import { useState } from "react";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import WhatsButton from "./components/WhatsButton";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <WhatsButton />
    </>
  );
}

export default App;
