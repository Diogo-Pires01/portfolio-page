import cryptoInvest from "../assets/images/projects/cryptoInvest.png";
import geradorCode from "../assets/images/projects/geradorCode.png";
import todoList from "../assets/images/projects/todolist.png";
import cloneApple from "../assets/images/projects/cloneapple.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      url: cryptoInvest,
      alt: "Crypto Invest",
      name: "Crypto Invest",
      link: "https://github.com/Diogo-Pires01/crypto-backend",
    },
    {
      id: 2,
      url: geradorCode,
      alt: "Gerador de QRCode",
      name: "Gerador de QRCode",
      link: "https://diogo-pires01.github.io/gerador-code/",
    },
    {
      id: 3,
      url: todoList,
      alt: "Todo List",
      name: "Todo List",
      link: "https://diogo-pires01.github.io/todo-list/",
    },
    {
      id: 4,
      url: cloneApple,
      alt: "Clone Apple",
      name: "Clone Apple",
      link: "https://diogo-pires01.github.io/clone-apple/",
    },
  ];

  return (
    <section id="projetos" className="min-h-screen overflow-x-hidden sm:overflow-x-visible">
      <div className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="relative flex flex-col items-center mt-4">
          <h1 className="absolute -top-10 text-9xl font-bold text-black/5 whitespace-nowrap select-none">
            PROJETOS
          </h1>

          <h2 className="relative text-5xl font-semibold text-black">
            Projetos
          </h2>

          <span className="w-33 h-1.25 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
