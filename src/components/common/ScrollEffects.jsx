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
    let homeTop = 0;
    let homeBottom = 0;
    let aboutTop = 0;

    const measureLayout = () => {
      /*
       * These measurements only need to happen when the layout can change,
       * not on every scroll frame.
       */
      homeTop = home.offsetTop;
      homeBottom = homeTop + home.offsetHeight;
      aboutTop = about.offsetTop;
    };

    const update = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      /*
       * Scroll indicator:
       * fade it as the user approaches the end of the Hero.
       */
      const heroFadeStart = Math.max(
        homeBottom - viewportHeight - 140,
        0,
      );

      const heroExitProgress = clamp(
        (scrollY - heroFadeStart) / 140,
        0,
        1,
      );

      /*
       * Hero → About transition:
       * use the already-measured About document position and
       * calculate its current viewport position from scrollY.
       */
      const aboutViewportTop = aboutTop - scrollY;

      const transitionStart = viewportHeight * 0.92;
      const transitionEnd = viewportHeight * 0.45;

      const sectionBlend = clamp(
        (transitionStart - aboutViewportTop) /
          (transitionStart - transitionEnd),
        0,
        1,
      );

      home.style.setProperty(
        "--hero-scroll-progress",
        heroExitProgress.toString(),
      );

      about.style.setProperty(
        "--section-blend",
        sectionBlend.toString(),
      );

      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(update);
    };

    const handleResize = () => {
      measureLayout();
      requestUpdate();
    };

    /*
     * Initial measurement.
     */
    measureLayout();
    update();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}

export default ScrollEffects;