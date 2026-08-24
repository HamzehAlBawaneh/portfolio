import Container from "../../common/Container";
import AboutCapabilities from "./AboutCapabilities";
import AboutIntro from "./AboutIntro";
import AboutTechnicalVisual from "./AboutTechnicalVisual";
import HeroBackground from "../Hero/HeroBackground";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 xl:pb-14 xl:pt-20"
    >
      {/* Shared Home / About background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <HeroBackground />
      </div>

      {/* ============================================================
          Hero → About atmospheric transition
          The traveling circle itself lives in Hero.jsx.
          ============================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          opacity: "var(--section-blend, 0)",
        }}
      >
        {/* Subtle straight light continuation */}
        <div
          className="absolute left-1/2 top-0 h-32 w-px -translate-x-1/2"
          style={{
            opacity: "var(--section-blend, 0.8)",
            background:
              "linear-gradient(to bottom, rgba(59,130,246,0.30), rgba(59,130,246,0.08), transparent)",
            boxShadow:
              "0 0 10px rgba(59,130,246,0.14), 0 0 24px rgba(37,99,235,0.08)",
          }}
        />

        {/* Original atmospheric glow */}
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 1050"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                id="aboutGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="22" />
              </filter>

              <linearGradient
                id="aboutPathGradient"
                x1="600"
                y1="105"
                x2="1040"
                y2="900"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#60A5FA" stopOpacity="0.82" />
                <stop offset="0.16" stopColor="#3B82F6" stopOpacity="0.68" />
                <stop offset="0.38" stopColor="#2478FF" stopOpacity="0.52" />
                <stop offset="0.62" stopColor="#2D7FFF" stopOpacity="0.36" />
                <stop offset="0.82" stopColor="#536FFF" stopOpacity="0.20" />
                <stop offset="1" stopColor="#765CFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="
                M600 105
                C600 170 615 240 605 320
                C595 410 565 495 515 580
                C465 665 405 740 375 805
                C350 860 370 900 435 925
                C505 952 595 940 685 925
                C775 910 835 890 920 900
                C1000 910 1060 945 1120 915
                C1160 895 1185 865 1200 835
              "
              stroke="url(#aboutPathGradient)"
              strokeWidth="68"
              strokeLinecap="round"
              filter="url(#aboutGlow)"
              opacity="0.82"
            />
          </svg>
        </div>
      </div>

      {/* About content */}
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