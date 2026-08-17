import Navbar from "./components/layout/Navbar";
import ScrollEffects from "./components/common/ScrollEffects";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <ScrollEffects />

      <main className="relative isolate min-h-svh pt-[var(--header-height)]">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;