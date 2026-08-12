import { useEffect } from "react";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function ScrollEffects() {
  useEffect(() => {
    const home = document.getElementById("home");
    const about = document.getElementById("about");

    if (!home || !about) {
      return undefined;
    }

    let frameId = 0;

    const update = () => {
      const viewportHeight = window.innerHeight;

      const homeRect = home.getBoundingClientRect();
      const aboutRect = about.getBoundingClientRect();

      /*
       * Scroll indicator:
       * visible at the top, then fades as Hero leaves the viewport.
       */
      const heroExitProgress = clamp(
        (viewportHeight - homeRect.bottom) / 140,
        0,
        1,
      );

      /*
       * Background transition:
       * 0 = About boundary still far below viewport
       * 1 = About boundary has reached ~35% of viewport height
       *
       * This gives us a long, smooth transition instead of
       * a binary "visible / not visible" trigger.
       */
      const transitionStart = viewportHeight * 0.92;
      const transitionEnd = viewportHeight * 0.45;

      const sectionBlend = clamp(
        (transitionStart - aboutRect.top) / (transitionStart - transitionEnd),
        0,
        1,
      );

      home.style.setProperty(
        "--hero-scroll-progress",
        heroExitProgress.toString(),
      );

      about.style.setProperty("--section-blend", sectionBlend.toString());

      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}

export default ScrollEffects;
