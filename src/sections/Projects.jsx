import cryptoInvest from "../assets/images/projects/cryptoInvest.png";
import arquitetura from "../assets/images/projects/arquiteturapage.png";
import dashboard from "../assets/images/projects/dashboardconfeitaria.png";
import estetica from "../assets/images/projects/esteticaautomotiva.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      url: estetica,
      alt: "Estética Automotiva",
      name: "Estética Automotiva",
      link: "https://github.com/Diogo-Pires01/esteticaAuto-page",
    },
    {
      id: 2,
      url: arquitetura,
      alt: "Pagina Arquitetura",
      name: "Pagina Arquitetura",
      link: "https://github.com/Diogo-Pires01/arquitetura-page",
    },
    {
      id: 3,
      url: dashboard,
      alt: "Dashboard Confeitaria",
      name: "Dashboard Confeitaria",
      link: "https://github.com/Diogo-Pires01/confeita-desk",
    },
    {
      id: 4,
      url: cryptoInvest,
      alt: "Painel Criptomoedas",
      name: "Painel Criptomoedas",
      link: "https://github.com/Diogo-Pires01/painel-cripto",
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen overflow-x-hidden sm:overflow-x-visible"
    >
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="relative flex flex-col items-center mt-6">
          <h1 className="absolute -top-10 text-9xl font-bold text-white/3 whitespace-nowrap select-none">
            PROJETOS
          </h1>

          <h2 className="relative text-5xl 2xl:text-6xl font-semibold text-white">
            Projetos
          </h2>

          <span className="w-33 h-1.25 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-10 mt-12 2xl:mt-16">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-border bg-surface transition-all duration-300 hover:border-primary/30"
            >
              <img
                src={project.url}
                alt={project.alt}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5 flex items-center justify-between">
                <span className="text-lg 2xl:text-xl font-medium text-white">
                  {project.name}
                </span>

                <a href={project.link} target="_blank" className="btn-terciary">
                  Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
