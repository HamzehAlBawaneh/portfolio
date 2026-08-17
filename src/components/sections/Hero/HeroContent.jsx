import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiOutlineArrowDownTray } from "react-icons/hi2";
import Button from "../../common/Button";
import socials from "../../../data/socials";
import resume from "../../../assets/documents/Hamzeh-Al-Bawaneh-Resume.pdf";

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
};

function HeroContent() {
  return (
    <div className="max-w-[620px] space-y-8 xl:space-y-5">
      <h1 className="text-[clamp(4.2rem,7vw,6.15rem)] font-bold leading-[0.93] tracking-[-0.07em] text-white">
        Building
        <br />
        <span className="bg-gradient-to-r from-[#0878ff] via-[#2768ff] to-[#8b68ff] bg-clip-text text-transparent">
          intelligent
        </span>
        <br />
        software<span className="text-blue-500">.</span>
      </h1>

      <p className="max-w-[560px] text-[22px] leading-[1.75] text-zinc-400">
        Artificial Intelligence Engineer &amp; Full-Stack Web Developer focused
        on creating intelligent products and modern web experiences.
      </p>

      <div className="flex flex-wrap gap-5 pt-2 xl:pt-0">
        <Button
          href="#projects"
          className="h-[64px] min-w-[220px] rounded-2xl px-9 text-lg shadow-[0_12px_32px_rgba(30,95,255,0.26)]"
        >
          <span className="flex items-center gap-4">
            View Projects <HiArrowRight size={20} aria-hidden="true" />
          </span>
        </Button>

        <Button
          variant="secondary"
          href={resume}
          download="Hamzeh-Al-Bawaneh-Resume.pdf"
          className="h-[64px] min-w-[240px] rounded-2xl border-white/25 px-8 text-lg hover:border-white/45 hover:bg-white/5"
        >
          <span className="flex items-center gap-4">
            Download Resume
            <HiOutlineArrowDownTray size={19} aria-hidden="true" />
          </span>
        </Button>
      </div>

      <div className="pt-3 xl:pt-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-300 xl:mb-5">
          Connect with me
        </p>

        <div className="flex gap-5">
          {socials.map(({ name, url }) => {
            const Icon = SOCIAL_ICONS[name];
            const isEmail = name === "Email";

            return (
              <a
                key={name}
                href={url}
                aria-label={name}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noreferrer"}
                className="relative flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.018] text-[22px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.035)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.035] hover:shadow-[0_12px_30px_rgba(37,99,235,0.14),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.04)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(120,160,255,0.035))]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-8 rounded-full bg-blue-500/[0.045] blur-2xl"
                />

                <span className="relative z-10">
                  <Icon aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroContent;