import { useEffect, useState } from "react";
import Logo from "./Logo";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} header ${
        isOpen ? "open" : "closed"
      }`}
    >
      <nav className="header__nav">
        {/*   <h1 className="header__title">CINTIA MARTINEZ</h1> */}
        <ul className={`header__list  ${isOpen ? "open" : "closed"}`}>
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <Link to="/Projects">Proyectos</Link>
          </li>
          <li>
            <a
              href="mailto:cintiamartinezmarcellan@gmail.com"
              className="hover:text-yellow-500"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__sidebar">
        {/*      <Logo icon="bxl:linkedin" /> */}
        <button className="header__toggle" onClick={() => setIsOpen(!isOpen)}>
          <Logo icon="charm:menu-hamburger" />
        </button>
      </div>
    </header>
  );
};

export default Header;
