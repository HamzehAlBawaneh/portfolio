import Container from "../../common/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05070c] pt-[98px]"
    >
      <HeroBackground />

      <Container
        maxWidth="max-w-[1396px]"
        className="relative z-10 xl:px-2.5"
        style={{ maxWidth: "1396px", marginInline: "auto", paddingInline: "10px" }}
      >
        <div className="hero-viewport flex min-h-[calc(100vh-98px)] items-start pt-12 py-16 xl:py-0">
          <div className="grid w-full items-start gap-14 xl:grid-cols-[minmax(520px,620px)_minmax(460px,544px)] xl:gap-[clamp(3rem,7vw,6rem)]">
            <HeroContent /> 
            <HeroImage />
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center xl:flex">
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
