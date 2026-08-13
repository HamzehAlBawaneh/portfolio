const BASE_CLASSES =
  "relative inline-flex items-center justify-center overflow-hidden rounded-2xl font-medium text-white transition-all duration-300 backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const SIZE_CLASSES = {
  sm: "h-11 px-6 text-sm",
  md: "h-14 px-8 text-base",
  lg: "h-16 px-10 text-lg",
};

const VARIANT_CLASSES = {
  primary:
    "border border-blue-300/45 bg-blue-500/[0.08] shadow-[0_10px_30px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,0.16)] hover:-translate-y-0.5 hover:border-blue-200/70 hover:bg-blue-500/[0.12] hover:shadow-[0_14px_36px_rgba(37,99,235,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]",

  secondary:
    "border border-white/25 bg-white/[0.045] shadow-[0_10px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.07] hover:shadow-[0_14px_36px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.18)]",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  ...props
}) {
  const classes = `${BASE_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_32%,transparent_68%,rgba(255,255,255,0.035))]"
        />
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_32%,transparent_68%,rgba(255,255,255,0.035))]"
      />
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}

export default Button;