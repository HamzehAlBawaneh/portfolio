import Navbar from "./components/layout/Navbar";
import ScrollEffects from "./components/common/ScrollEffects";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import Experience from "./components/sections/Experience/Experience";
import MouseGlow from "./components/common/MouseGlow";

function App() {
  return (
    <div className="relative">
      <MouseGlow />
      <Navbar />
      <ScrollEffects />

      <main className="relative isolate min-h-svh pt-[var(--header-height)]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}

export default App;