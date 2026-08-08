import { HiOutlineArrowDownTray } from "react-icons/hi2";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1450px] px-12">

        <nav
          className="flex h-[108px] items-center"
          style={{ paddingInline: "24px" }}
        >

          {/* Logo */}
          <a
            href="#home"
            aria-label="Home"
            className="text-[42px] font-bold leading-none tracking-[-0.08em] text-white transition-colors duration-300 hover:text-blue-400"
          >
            HB<span className="text-blue-500">.</span>
          </a>

          {/* Navigation */}
          <ul
            className="hidden xl:flex items-center gap-14"
            style={{ marginLeft: "32px" }}
          >
            {navigation.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-base text-[#c5c7d3] transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <button
            className="
              flex
              h-[58px]
              w-[140px]
              items-center
              justify-center
              gap-3
              rounded-3xl
              border
              border-blue-500/80
              bg-transparent
              text-[18px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-blue-500/10
              hover:border-blue-400
            "
            style={{ marginLeft: "32px" }}
          >
            Resume
            <HiOutlineArrowDownTray size={20} />
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;
