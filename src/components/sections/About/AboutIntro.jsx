function AboutIntro() {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_20px_60px_rgba(0,20,75,0.18)] sm:p-7 lg:p-8">
      <p className="text-sm font-semibold text-blue-400">Who I am</p>

      <p className="mt-5 text-xl leading-[1.45] text-white sm:text-2xl">
        I'm an AI student who learns by turning ideas into projects.
      </p>

      <p className="mt-5 max-w-[34rem] text-sm leading-6 text-zinc-400 sm:text-base">
        I like starting with a problem, figuring out what it takes to solve
        it, and learning whatever I need along the way. Some projects involve
        models and data, others involve cameras, APIs, sensors, or software.
        The common part is simple: I want to build it, test it, and make it
        better.
      </p>

      <div className="mt-6 border-t border-white/10 pt-4 sm:mt-7">
        <div className="h-px bg-gradient-to-r from-blue-500 via-blue-500/70 to-transparent shadow-[0_0_14px_rgba(37,99,235,0.9)]" />

        <div className="mt-3 grid grid-cols-3 text-center text-xs font-medium text-zinc-300">
          <span>BUILD</span>
          <span className="border-x border-white/10">TEST</span>
          <span>IMPROVE</span>
        </div>
      </div>
    </article>
  );
}

export default AboutIntro;