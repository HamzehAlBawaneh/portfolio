function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1396px] px-6 sm:px-8 lg:px-10 xl:px-2.5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
