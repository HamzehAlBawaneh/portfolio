import { useEffect, useState } from "react";
import { HiBars3, HiOutlineArrowDownTray, HiXMark } from "react-icons/hi2";
import navigation from "../../data/navigation";
import resume from "../../assets/documents/Hamzeh-Al-Bawaneh-Resume.pdf";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sectionElements = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/[0.18] shadow-[0_8px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      {/* Subtle glass reflection */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),transparent_45%,rgba(255,255,255,0.015))]"
      />

      <div className="relative mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <nav
          className="flex h-[var(--header-height)] items-center justify-between xl:justify-start xl:px-6"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            aria-label="Home"
            className="relative z-10 text-[42px] font-bold leading-none tracking-[-0.08em] text-white transition-colors duration-300 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            HB<span className="text-blue-500">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="ml-auto hidden items-center xl:flex">
            <ul className="flex items-center gap-14">
              {navigation.map(({ name, href }) => {
                const isActive = activeSection === href;

                return (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={() => setActiveSection(href)}
                      className={`group relative flex h-full items-center py-3 text-base transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 ${
                        isActive
                          ? "text-white"
                          : "text-[#c5c7d3] hover:text-white"
                      }`}
                    >
                      {name}

                      {/* Active underline */}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-200 ${
                          isActive
                            ? "w-7 opacity-100 shadow-[0_0_8px_rgba(96,165,250,0.9),0_0_18px_rgba(59,130,246,0.55)]"
                            : "w-0 opacity-0"
                        }`}
                      />

                      {/* Soft active glow */}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -bottom-1 left-1/2 h-5 -translate-x-1/2 rounded-full bg-blue-500/20 blur-md transition-opacity duration-200 ${
                          isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Resume */}
            <a
              href={resume}
              download="Hamzeh-Al-Bawaneh-Resume.pdf"
              className="relative ml-10 flex h-[58px] w-[140px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-blue-300/40 bg-blue-500/[0.06] text-[18px] font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.10),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/65 hover:bg-blue-500/[0.1] hover:shadow-[0_14px_36px_rgba(37,99,235,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,transparent_68%,rgba(255,255,255,0.025))]"
              />

              <span className="relative z-10 flex items-center justify-center gap-3">
                Resume
                <HiOutlineArrowDownTray size={20} aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="relative z-10 ml-auto flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/[0.035] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-blue-300/45 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 xl:hidden"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_40%,rgba(255,255,255,0.02))]"
            />

            <span className="relative z-10">
              {isMenuOpen ? (
                <HiXMark size={24} aria-hidden="true" />
              ) : (
                <HiBars3 size={24} aria-hidden="true" />
              )}
            </span>
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full z-50 overflow-hidden border-x border-b border-white/10 bg-[#06142f]/55 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_34%,rgba(255,255,255,0.015))]"
            />

            <ul className="relative z-10 flex flex-col gap-1">
              {navigation.map(({ name, href }) => {
                const isActive = activeSection === href;

                return (
                  <li key={name}>
                    <a
                      href={href}
                      onClick={() => {
                        setActiveSection(href);
                        closeMenu();
                      }}
                      className={`relative block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                        isActive
                          ? "bg-blue-500/[0.08] text-blue-300"
                          : "text-[#c5c7d3] hover:bg-white/[0.055] hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-4 top-0 w-[2px] rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                        />
                      )}

                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
