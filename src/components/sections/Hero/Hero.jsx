import Container from "../../common/Container";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden pt-27">
      <HeroBackground />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100svh-6.75rem)] items-start gap-12 py-12 xl:grid-cols-[minmax(0,620px)_minmax(460px,1fr)] xl:gap-[clamp(3rem,7vw,6rem)] xl:py-0">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-7 z-10 hidden flex-col items-center xl:flex"
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
