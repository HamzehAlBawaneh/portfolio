import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import HeroBackground from "../Hero/HeroBackground";
import skillCategories from "../../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
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
            eyebrow="03 / Technical Skills"
            title="The technologies I use to build intelligent software."
            description="A practical stack spanning artificial intelligence, computer vision, machine learning, full-stack development, automation, data, and robotics."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:mt-14 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
              <article
                key={category.id}
                className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.04] hover:shadow-[0_22px_55px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.10)]"
              >
                {/* Subtle glass reflection */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_34%,transparent_70%,rgba(96,165,250,0.018))]"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.03em] text-white">
                        {category.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400/80 shadow-[0_0_12px_rgba(59,130,246,0.55)]"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {category.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors duration-200 group-hover:border-blue-300/15 group-hover:text-zinc-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;