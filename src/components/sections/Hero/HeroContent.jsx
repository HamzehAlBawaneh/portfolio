import Button from "../../common/Button";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiOutlineArrowDownTray } from "react-icons/hi2";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HamzehAlBawaneh",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hamzeh-al-bawaneh-9b6023366",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:hamzehbawaneh6@gmail.com",
    icon: FaEnvelope,
  },
];

function HeroContent() {
  return (
    <div className="relative z-10 max-w-[620px] xl:-translate-y-5">
      {/* Heading */}
      <h1
        className="mt-20 max-w-[620px] text-[clamp(4.2rem,7vw,6.15rem)] font-bold leading-[0.93] tracking-[-0.07em] text-white"
    
      >
        Building
        <br />
        <span className="bg-gradient-to-r from-[#0878ff] via-[#2768ff] to-[#8b68ff] bg-clip-text text-transparent">
          intelligent
        </span>
        <br />
        software<span className="text-blue-500">.</span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-[560px] text-[22px] leading-[1.75] text-zinc-400">
        Artificial Intelligence Engineer &amp; Full-Stack Web Developer focused
        on creating intelligent products and modern web experiences.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">
        <Button
          className="h-[64px] min-w-[220px] rounded-2xl px-9 text-lg shadow-[0_12px_32px_rgba(30,95,255,0.26)]"
          onClick={() => {
            window.location.hash = "projects";
          }}
        >
          <span className="flex items-center gap-4">
            View Projects
            <HiArrowRight size={20} />
          </span>
        </Button>

        <Button
          variant="secondary"
          className="h-[64px] min-w-[240px] rounded-2xl border-white/25 px-8 text-lg hover:border-white/45 hover:bg-white/5"
        >
          <span className="flex items-center gap-4">
            Download Resume
            <HiOutlineArrowDownTray size={19} />
          </span>
        </Button>
      </div>

      {/* Social */}
      <div
        id="connect"
        style={{
          marginTop: "50px",
        }}
      >
        <p className="mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-zinc-300">
          Connect with me
        </p>

        <div className="flex gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border border-white/20 text-[22px] text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/5 hover:shadow-[0_0_25px_rgba(37,99,235,0.18)]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
