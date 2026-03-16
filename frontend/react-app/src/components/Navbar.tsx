import { useState, useEffect } from "react";
import logo from "../assets/TKlogo.svg";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <img src={logo} alt="TK Gym" className="h-10" />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-widest text-white">

          <NavItem label="Home" />
          <NavItem label="Training" />
          <NavItem label="Schedule" />
          <NavItem label="Coach" />
          <NavItem label="Contact" />

        </div>

        {/* CTA */}
        <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-md font-semibold transition">
          Proefles
        </button>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 text-white text-lg p-8 pt-20">

          <a href="#">Home</a>
          <a href="#">Training</a>
          <a href="#">Schedule</a>
          <a href="#">Coach</a>
          <a href="#">Contact</a>

          <button className="bg-orange-500 px-6 py-2 rounded-md">
            Proefles
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* Nav item with animated underline */

const NavItem = ({ label }: { label: string }) => {
  return (
    <a className="relative cursor-pointer group">
      {label}

      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};