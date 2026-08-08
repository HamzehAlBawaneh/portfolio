function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300";

  const sizes = {
    sm: "h-11 px-6 text-sm",
    md: "h-14 px-8 text-base",
    lg: "h-16 px-10 text-lg",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20",

    secondary:
      "border border-zinc-700 text-white hover:border-blue-500 hover:bg-zinc-900",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
