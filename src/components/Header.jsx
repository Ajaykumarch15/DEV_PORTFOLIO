export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-extrabold text-black">
          ajay<span className="text-red-500">.</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#experience" className="hover:text-black">Experience</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block px-4 py-2 border border-black hover:bg-red-500 hover:text-white transition"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
