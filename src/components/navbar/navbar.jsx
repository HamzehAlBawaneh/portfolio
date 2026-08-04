function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          Hamza
        </h1>

        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;