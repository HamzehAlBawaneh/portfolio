import Container from "../../common/Container";
import AboutCapabilities from "./AboutCapabilities";
import AboutIntro from "./AboutIntro";
import AboutTechnicalVisual from "./AboutTechnicalVisual";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-visible pb-10 pt-12 sm:pb-14 sm:pt-16 xl:pb-14 xl:pt-20"
    >
      {/* Hero → About visual transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 z-[2] h-24 overflow-visible"
      >
        {/* Wide atmospheric blue/violet glow */}
        <div
          className="absolute inset-x-[-10%] top-1/2 h-24 -translate-y-1/2 rounded-full blur-[65px]"
          style={{
            opacity: "calc(var(--section-blend, 0) * 0.9)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(20,82,235,0.06) 18%, rgba(37,99,235,0.22) 42%, rgba(99,78,220,0.18) 58%, rgba(99,78,220,0.05) 82%, transparent 100%)",
          }}
        />

        {/* Thin luminous horizon */}
        <div
          className="absolute inset-x-[-2%] top-1/2 h-px -translate-y-1/2"
          style={{
            opacity: "calc(var(--section-blend, 0) * 0.65)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.08) 25%, rgba(78,130,255,0.48) 50%, rgba(139,92,246,0.12) 75%, transparent 100%)",
            boxShadow:
              "0 0 14px rgba(37,99,235,0.28), 0 0 32px rgba(37,99,235,0.12)",
          }}
        />

        {/* Subtle central bloom */}
        <div
          className="absolute left-1/2 top-1/2 h-20 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[42px]"
          style={{
            opacity: "calc(var(--section-blend, 0) * 0.55)",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.20) 0%, rgba(59,130,246,0.06) 42%, transparent 72%)",
          }}
        />
      </div>

      {/* About background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[#060914]"
      />

      {/* About ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-blue-700/10 blur-[150px]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[1210px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            01 / About me
          </p>

          <h2 className="mt-4 max-w-[44rem] text-[clamp(2.5rem,4.6vw,4.7rem)] font-bold leading-[1.05] tracking-[-0.055em] text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-[#0878ff] via-[#2768ff] to-[#8b68ff] bg-clip-text text-transparent">
              intelligent
            </span>{" "}
            systems with purpose
            <span className="text-blue-500">.</span>
          </h2>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(19rem,0.8fr)] lg:gap-10 xl:mt-12 xl:gap-16">
            <AboutIntro />
            <AboutTechnicalVisual />
          </div>

          <div className="mt-6 xl:mt-8">
            <AboutCapabilities />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;