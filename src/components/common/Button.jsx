const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400";

const SIZE_CLASSES = {
  sm: "h-11 px-6 text-sm",
  md: "h-14 px-8 text-base",
  lg: "h-16 px-10 text-lg",
};

const VARIANT_CLASSES = {
  primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500",
  secondary: "border border-zinc-700 text-white hover:border-blue-500 hover:bg-zinc-900",
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
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
