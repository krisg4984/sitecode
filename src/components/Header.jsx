export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <span className="text-xl font-bold font-headline text-[#1c1b1b]">Kris Eden Gonzales</span>
        <div className="hidden md:flex gap-10 items-center">
          <a className="font-headline uppercase tracking-widest text-xs text-[#00502e] border-b-2 border-[#00502e] pb-1 hover:text-[#00502e] transition-colors duration-300" href="#portfolio">
            Portfolio
          </a>
          <a className="font-headline uppercase tracking-widest text-xs text-[#1c1b1b]/60 hover:text-[#00502e] transition-colors duration-300" href="#experience">
            Experience
          </a>
          <a className="font-headline uppercase tracking-widest text-xs text-[#1c1b1b]/60 hover:text-[#00502e] transition-colors duration-300" href="#skills">
            Skills
          </a>
          <a className="font-headline uppercase tracking-widest text-xs text-[#1c1b1b]/60 hover:text-[#00502e] transition-colors duration-300" href="#contact">
            Contact
          </a>
        </div>
        <button className="editorial-gradient text-white font-headline font-bold text-xs uppercase tracking-widest px-6 py-3 rounded shadow-sm active:scale-95 transition-all duration-300">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
