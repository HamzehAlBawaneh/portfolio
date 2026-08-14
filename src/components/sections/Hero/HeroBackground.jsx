function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#05070c]" />

      {/* Main Hero blue atmosphere */}
      <div className="absolute -right-48 top-[-18%] h-[760px] w-[760px] rounded-full bg-[#0b4ccc]/30 blur-[170px]" />

      <div className="absolute -bottom-40 left-[28%] h-[520px] w-[620px] rounded-full bg-[#07358e]/20 blur-[150px]" />

      {/* Soft radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_43%,rgba(29,100,255,0.18),transparent_33%),radial-gradient(ellipse_at_48%_82%,rgba(8,56,148,0.12),transparent_38%)]" />

      {/* Subtle horizontal depth only — no bottom dark seam */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.32),transparent_54%)]" />
    </div>
  );
}

export default HeroBackground;