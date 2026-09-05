import { HiArrowUpRight } from "react-icons/hi2";

function ProjectFeatured({
  title,
  category,
  description,
  technologies,
  result,
  image,
  href,
}) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.025] shadow-[0_28px_90px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-2xl">
      {/* Cursor-following glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 220px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(96,165,250,0.08), transparent 70%)",
        }}
      />

      {/* Glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.075),transparent_28%,transparent_70%,rgba(96,165,250,0.025))]"
      />

      {/* Ambient glass light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 z-[1] h-56 w-56 rounded-full bg-blue-500/[0.045] blur-3xl"
      />

      <div className="relative z-[2] overflow-hidden border-b border-white/[0.08]">
        <img
          src={image}
          alt={`${title} project banner`}
          className="block aspect-[16/7] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.02),rgba(5,7,12,0.10))]"
        />
      </div>

      <div className="relative z-[2] grid gap-8 p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:p-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
            {category}
          </p>

          <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.04em] text-white">
            {title}
          </h3>

          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 lg:items-end">
          {result && (
            <div className="text-left lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Result
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{result}</p>
            </div>
          )}

          {href && (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-white/20 bg-white/[0.035] px-4 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_30px_rgba(37,99,235,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%,rgba(255,255,255,0.015))]"
              />

              <span className="relative z-10 flex items-center gap-2">
                View on GitHub
                <HiArrowUpRight size={17} aria-hidden="true" />
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectFeatured;
