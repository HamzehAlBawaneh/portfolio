import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Container from "../../common/Container";
import HeroBackground from "../Hero/HeroBackground";
import socials from "../../../data/socials";

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

function Contact() {
  return (
    <section
      id="contact"
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
          <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/[0.025] px-6 py-14 shadow-[0_28px_90px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Glass reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_30%,transparent_70%,rgba(96,165,250,0.025))]"
            />

            {/* Ambient light */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-[850px] text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                05 / Contact
              </p>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.02] tracking-[-0.055em] text-white">
                Have something worth{" "}
                <span className="bg-gradient-to-r from-[#0878ff] via-[#2768ff] to-[#8b68ff] bg-clip-text text-transparent">
                  building
                </span>
                <span className="text-blue-500">?</span>
              </h2>

              <p className="mx-auto mt-6 max-w-[680px] text-base leading-7 text-zinc-400 sm:text-lg">
                Whether it&apos;s a project, an idea, or a problem that needs
                solving, I&apos;m always interested in building something useful
                and figuring out how to make it better.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hamzehbawaneh6@gmail.com"
                  className="relative inline-flex h-[56px] items-center gap-3 overflow-hidden rounded-2xl border border-blue-300/35 bg-blue-500/[0.07] px-7 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,0.13)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:bg-blue-500/[0.11] hover:shadow-[0_16px_38px_rgba(37,99,235,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.02))]"
                  />

                  <span className="relative z-10 flex items-center gap-3">
                    Let's Talk
                    <HiArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </a>

                <a
                  href="#projects"
                  className="inline-flex h-[56px] items-center rounded-2xl border border-white/15 bg-white/[0.025] px-7 text-sm font-semibold text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.045] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  View My Work
                </a>
              </div>

              <div className="mt-11 flex flex-wrap justify-center gap-4">
                {socials.map(({ name, url }) => {
                  const Icon = SOCIAL_ICONS[name];
                  const href =
                    name === "Email"
                      ? "https://mail.google.com/mail/?view=cm&fs=1&to=hamzehbawaneh6@gmail.com"
                      : url;

                  return (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      target={name === "Email" ? undefined : "_blank"}
                      rel={name === "Email" ? undefined : "noreferrer"}
                      className="group relative flex h-12 min-w-12 items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] px-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-white/[0.045] hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_40%,rgba(96,165,250,0.018))]"
                      />

                      <Icon
                        size={17}
                        className="relative z-10"
                        aria-hidden="true"
                      />

                      <span className="relative z-10 text-xs font-medium">
                        {name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-zinc-600 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Hamzeh Al-Bawaneh. All rights
              reserved.
            </p>

            <a
              href="#home"
              className="text-zinc-500 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
