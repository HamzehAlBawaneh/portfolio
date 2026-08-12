const concepts = [
  { label: "AI / ML", x: 24, y: 22, anchor: "end" },
  { label: "Computer Vision", x: 77, y: 22, anchor: "start" },
  { label: "Robotics", x: 23, y: 79, anchor: "end" },
  { label: "Software", x: 77, y: 79, anchor: "start" },
];

const nodes = [
  [50, 50], [38, 38], [62, 38], [34, 57], [66, 58], [44, 67], [57, 68],
  [28, 31], [72, 31], [23, 65], [77, 65], [49, 20], [50, 82],
];

function AboutTechnicalVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[30rem]" aria-label="Artificial intelligence disciplines visual">
      <div className="absolute inset-[17%] rounded-full bg-blue-500/10 blur-3xl" />
      <svg viewBox="0 0 100 100" className="relative h-full w-full overflow-visible" role="img" aria-hidden="true">
        <defs>
          <radialGradient id="about-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#7dd3fc" />
            <stop offset="48%" stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
          <filter id="about-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g fill="none" stroke="#3867d6" strokeOpacity="0.34" strokeWidth="0.28">
          <circle cx="50" cy="50" r="12" />
          <circle cx="50" cy="50" r="22" strokeDasharray="1.2 1.5" />
          <circle cx="50" cy="50" r="33" strokeOpacity="0.2" />
          <path d="M28 31 38 38 50 20 62 38 72 31M23 65 34 57 44 67 50 82 57 68 66 58 77 65M28 31 34 57M72 31 66 58M38 38 57 68M62 38 44 67M34 57 66 58M38 38 62 38" />
        </g>

        <circle cx="50" cy="50" r="9" fill="url(#about-core)" filter="url(#about-glow)" />
        <circle cx="50" cy="50" r="2.5" fill="#dbeafe" filter="url(#about-glow)" />

        <g fill="#6b65ff" filter="url(#about-glow)">
          {nodes.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={x === 50 && y === 50 ? 1.1 : 0.8} />)}
        </g>

        <g fill="#cbd5e1" fontFamily="Inter, sans-serif" fontSize="4" fontWeight="600">
          {concepts.map(({ label, x, y, anchor }) => (
            <text key={label} x={x} y={y} textAnchor={anchor}>{label}</text>
          ))}
        </g>
        <g fill="none" stroke="#4f7cff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M31 18h4v4M69 18h-4v4M31 82h4v-4M69 82h-4v-4" />
          <path d="M22 23c1.5-2 4-2 5.5 0-1.5 2-4 2-5.5 0Zm1.5 0h2.5" />
          <path d="M75 75h5m-2.5-2.5v5" />
        </g>
      </svg>
    </div>
  );
}

export default AboutTechnicalVisual;
