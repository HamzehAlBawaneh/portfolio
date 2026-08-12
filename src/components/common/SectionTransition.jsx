import { useEffect, useState } from "react";

function SectionTransition() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const about = document.getElementById("about");

      if (!about) {
        return;
      }

      const rect = about.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // 0 = About is below the viewport
      // 1 = About has moved well into the viewport
      const rawProgress =
        (viewportHeight - rect.top) / Math.min(viewportHeight * 0.45, 360);

      const nextProgress = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(nextProgress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-48 -translate-y-full"
      style={{
        opacity: progress,
        background:
          "linear-gradient(to bottom, rgba(5,7,12,0), rgba(5,7,12,0.95) 45%, rgba(6,9,20,1))",
      }}
    />
  );
}

export default SectionTransition;