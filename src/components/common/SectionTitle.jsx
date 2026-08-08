function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`
        max-w-3xl
        ${align === "center" ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <p className="text-blue-400 uppercase tracking-[0.18em] text-sm font-medium mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-zinc-400 text-lg leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;