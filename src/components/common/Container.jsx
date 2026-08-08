function Container({
  children,
  className = "",
  maxWidth = "max-w-[1320px]",
  style,
}) {
  return (
    <div
      className={`
        w-full
        ${maxWidth}
        mx-auto
        px-8
        lg:px-10
        xl:px-0
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}

export default Container;
