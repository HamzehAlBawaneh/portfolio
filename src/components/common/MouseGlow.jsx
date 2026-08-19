import { useEffect } from "react";

function MouseGlow() {
  useEffect(() => {
    const root = document.documentElement;

    let frameId = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const update = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      root.style.setProperty("--mouse-x", `${currentX}px`);
      root.style.setProperty("--mouse-y", `${currentY}px`);

      frameId = window.requestAnimationFrame(update);
    };

    const handlePointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    frameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: "var(--mouse-x, 50vw)",
          top: "var(--mouse-y, 50vh)",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.085) 0%, rgba(37,99,235,0.04) 32%, transparent 72%)",
          filter: "blur(20px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default MouseGlow;