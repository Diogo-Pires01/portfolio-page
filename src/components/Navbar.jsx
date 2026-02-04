import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: isMobile ? 0.2 : 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) => (active === id ? "nav-link-active" : "");

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white shadow-[0_8px_8px_rgba(0,0,0,0.1)] hidden md:block">
        <div className="flex gap-6 mx-5 my-4">
          <a href="#inicio" className={`nav-link ${linkClass("inicio")}`}>
            Início
          </a>

          <a href="#sobre" className={`nav-link ${linkClass("sobre")}`}>
            Sobre mim
          </a>

          <a href="#projetos" className={`nav-link ${linkClass("projetos")}`}>
            Projetos
          </a>

          <a href="#contato" className={`nav-link ${linkClass("contato")}`}>
            Contato
          </a>
        </div>
      </nav>

      {/* Btn para mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 md:hidden bg-white p-3 rounded-full shadow-md"
        aria-label="Abrir menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div className="fixed top-20 right-5 px-2 py-4 rounded-lg z-40 bg-white flex flex-col items-center justify-center gap-8 text-lg md:hidden">
          <a
            href="#inicio"
            className={`nav-link ${linkClass("inicio")}`}
            onClick={() => setIsOpen(false)}
          >
            Início
          </a>

          <a
            href="#sobre"
            className={`nav-link ${linkClass("sobre")}`}
            onClick={() => setIsOpen(false)}
          >
            Sobre mim
          </a>

          <a
            href="#projetos"
            className={`nav-link ${linkClass("projetos")}`}
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </a>

          <a
            href="#contato"
            className={`nav-link ${linkClass("contato")}`}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
