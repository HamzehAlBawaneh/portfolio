import { useState } from "react";
import { HiBars3, HiOutlineArrowDownTray, HiXMark } from "react-icons/hi2";
import navigation from "../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/10 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1450px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <nav
          className="flex h-[var(--header-height)] items-center justify-between xl:justify-start xl:px-6"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            aria-label="Home"
            className="text-[42px] font-bold leading-none tracking-[-0.08em] text-white transition-colors duration-300 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            HB<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center ml-auto xl:flex">
            <ul className="flex items-center gap-14">
              {navigation.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-base text-[#c5c7d3] transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="ml-10 flex h-[58px] w-[140px] items-center justify-center gap-3 rounded-3xl border border-blue-500/80 bg-transparent text-[18px] font-semibold text-white transition-colors duration-300 hover:border-blue-400 hover:bg-blue-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Resume
              <HiOutlineArrowDownTray size={20} aria-hidden="true" />
            </button>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition-colors duration-300 hover:border-blue-400 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 xl:hidden"
          >
            {isMenuOpen ? (
              <HiXMark size={24} aria-hidden="true" />
            ) : (
              <HiBars3 size={24} aria-hidden="true" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#06142f]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#c5c7d3] transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
