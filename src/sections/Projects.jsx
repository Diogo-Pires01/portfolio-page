import teste from "../assets/images/projects/teste.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      url: teste,
      alt: "Projeto X",
      name: "Proj name",
      link: "https://github.com/Diogo-Pires01",
    },
    {
      id: 2,
      url: teste,
      alt: "Projeto Y",
      name: "Proj name",
      link: "https://github.com/Diogo-Pires01",
    },
    {
      id: 3,
      url: teste,
      alt: "Projeto X",
      name: "Proj name",
      link: "https://github.com/Diogo-Pires01",
    },
    {
      id: 4,
      url: teste,
      alt: "Projeto Y",
      name: "Proj name",
      link: "https://github.com/Diogo-Pires01",
    },
  ];

  return (
    <section id="projetos" className="min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden border bg-white"
            >
              <img
                src={project.url}
                alt={project.alt}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5 flex items-center justify-between">
                <span className="text-lg font-medium">{project.name}</span>

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
