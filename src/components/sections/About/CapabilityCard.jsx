import { HiArrowUpRight, HiCodeBracket, HiCpuChip, HiEye, HiWrenchScrewdriver } from "react-icons/hi2";

const ICONS = {
  ai: HiCpuChip,
  vision: HiEye,
  code: HiCodeBracket,
  robotics: HiWrenchScrewdriver,
};

function CapabilityCard({ title, description, icon }) {
  const Icon = ICONS[icon];

  return (
    <article className="group relative min-h-[11rem] rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors hover:border-blue-400/35 hover:bg-white/[0.055]">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-400 shadow-[0_0_22px_rgba(37,99,235,0.18)]">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 pr-5 text-sm leading-6 text-zinc-400">{description}</p>
      <HiArrowUpRight aria-hidden="true" className="absolute bottom-5 right-5 text-lg text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </article>
  );
}

export default CapabilityCard;
