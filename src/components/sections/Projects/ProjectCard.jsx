import { HiArrowUpRight } from "react-icons/hi2";

function ProjectCard({
  title,
  category,
  description,
  technologies,
  image,
  href,
}) {
  const actionLabel = "View on GitHub";

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.025] shadow-[0_22px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-2xl">
      {/* Cursor-following glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.08), transparent 70%)",
        }}
      />

      {/* Glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.075),transparent_28%,transparent_72%,rgba(96,165,250,0.025))]"
      />

      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 z-[1] h-40 w-40 rounded-full bg-blue-500/[0.04] blur-3xl"
      />

      <div className="relative z-[2] overflow-hidden">
        <img
          src={image}
          alt={`${title} project banner`}
          className="block aspect-[16/9] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.015),rgba(5,7,12,0.08))]"
        />
      </div>

      <div className="relative z-[2] p-6">
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.17em] text-blue-400">
          {category}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/15 bg-white/[0.025] px-3.5 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/45 hover:bg-white/[0.05] hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.065),transparent_40%,rgba(255,255,255,0.015))]"
            />

            <span className="relative z-10 flex items-center gap-2">
              {actionLabel}
              <HiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
