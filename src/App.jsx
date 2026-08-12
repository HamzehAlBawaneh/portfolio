import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import HeroBackground from "./components/sections/Hero/HeroBackground";

function App() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden">
      <HeroBackground />
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
