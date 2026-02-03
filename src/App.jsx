import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import WhatsButton from "./components/WhatsButton";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhatsButton />
    </>
  );
}

export default App;
