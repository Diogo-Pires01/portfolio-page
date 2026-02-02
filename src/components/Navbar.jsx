import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const linkClass = (id) => (active === id ? "nav-link-active" : "");

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-white shadow-[0_8px_8px_rgba(0,0,0,0.1)]">
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
  );
};

export default Navbar;
