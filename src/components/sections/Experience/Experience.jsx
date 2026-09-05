import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import HeroBackground from "../Hero/HeroBackground";
import experience from "../../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 xl:py-28"
    >
      {/* Shared portfolio background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <HeroBackground />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-[1210px]">
          <SectionTitle
            eyebrow="04 / Experience"
            title="Different environments. Same mindset."
            description="Some of my experience comes from building software, some from teaching, and some from working with systems where precision matters."
          />

          <div className="relative mt-12 xl:mt-14">
            {/* Timeline rail */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[28px] top-0 w-px bg-gradient-to-b from-blue-400/80 via-blue-500/45 to-blue-500/10 sm:left-[34px]"
            />

            <div className="space-y-5 sm:space-y-6">
              {experience.map((item) => (
                <article key={item.id} className="relative pl-14 sm:pl-[72px]">
                  {/* Timeline node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[21px] top-8 flex h-4 w-4 items-center justify-center rounded-full border border-blue-300/70 bg-[#071127] shadow-[0_0_14px_rgba(59,130,246,0.55),0_0_30px_rgba(37,99,235,0.25)] sm:left-[27px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                  </span>

                  <div className="group relative overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.025] shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-white/[0.035] hover:shadow-[0_24px_68px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)]">
                    {/* Cursor-following glass reflection */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.07), transparent 70%)",
                      }}
                    />

                    {/* Glass reflection */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_30%,transparent_72%,rgba(96,165,250,0.018))]"
                    />

                    {/* Subtle blue ambient light */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-3xl"
                    />

                    <div className="relative z-10 grid gap-6 p-6 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-7 sm:p-7 lg:grid-cols-[190px_minmax(0,1fr)_auto] lg:items-start">
                      {/* Logo */}
                      <div className="flex items-start">
                        <div className="flex h-[132px] w-[132px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] sm:h-[148px] sm:w-[148px]">
                          <img
                            src={item.logo}
                            alt={`${item.organization} logo`}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Main content */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                            {item.period}
                          </p>
                        </div>

                        <h3 className="mt-2 text-[clamp(1.45rem,2.4vw,2rem)] font-bold tracking-[-0.035em] text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-base font-medium text-blue-400">
                          {item.organization}
                        </p>

                        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400 sm:text-[15px] sm:leading-7">
                          {item.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="lg:pt-0">
                        <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-3.5 py-2 text-xs font-semibold text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                          <span
                            aria-hidden="true"
                            className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                          />
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
