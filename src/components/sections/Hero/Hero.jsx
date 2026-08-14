import Container from "../../common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section id="home" className="relative">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-center lg:gap-10 lg:py-6 xl:min-h-[calc(100svh-var(--header-height))] xl:grid-cols-[minmax(0,620px)_minmax(460px,1fr)] xl:gap-[clamp(3rem,7vw,6rem)] xl:py-0">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      {/* Scroll indicator / glow origin */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-7 z-10 hidden flex-col items-center transition-opacity duration-150 xl:flex"
        style={{
          opacity: "calc(1 - var(--hero-scroll-progress, 0))",
        }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.27em] text-zinc-500">
          Scroll
        </span>

        {/* Longer glowing scroll line */}
        <span
          className="mt-3 h-12 w-px bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"
          style={{
            boxShadow:
              "0 0 8px rgba(59,130,246,0.75), 0 0 20px rgba(37,99,235,0.42)",
          }}
        />

        {/* Glowing origin point */}
        <span
          className="h-1.5 w-1.5 rounded-full bg-blue-400"
          style={{
            boxShadow:
              "0 0 8px rgba(96,165,250,0.95), 0 0 20px rgba(37,99,235,0.55), 0 0 36px rgba(37,99,235,0.28)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;