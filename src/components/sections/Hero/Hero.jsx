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
        <span className="mt-3 h-8 w-px bg-gradient-to-b from-blue-400 to-blue-600" />
        <span className="h-1 w-1 rounded-full bg-blue-500" />
      </div>
    </section>
  );
}

export default Hero;
