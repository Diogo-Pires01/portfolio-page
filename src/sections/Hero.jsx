import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const logos = [
    { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React" },
    { src: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript" },
    { src: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML" },
    { src: "https://cdn.simpleicons.org/css/1572B6", alt: "CSS" },
    { src: "https://cdn.simpleicons.org/express/000000", alt: "Express" },
    { src: "https://cdn.simpleicons.org/nodedotjs/339933", alt: "Node.js" },
    { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind" },
  ];

  return (
    <section id="inicio">
      <div className="min-h-screen bg-[linear-gradient(180deg,#999999_15%,#FFFFFF_85%)] flex flex-col items-center justify-center">
        <h1 className="font-medium text-lg md:text-4xl">Diogo Pires</h1>
        <h2 className="font-bold text-3xl md:text-[64px]">Desenvolvedor Web</h2>
        <p className="font-medium text-xs md:text-xl text-font-light text-center">
          Desenvolvedor Front End e graduando em Ciência da
          <br /> Computação pela IBMR.
        </p>
        <div className="my-8 flex gap-4">
          <a href="#projetos" className="btn-primary">
            Ver projetos
          </a>
          <a href="" download className="btn-secundary">
            Baixar CV <FaDownload className="ml-2 inline-block" />
          </a>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl overflow-hidden">
          <div className="tech-container left-0" />
          <div className="tech-container right-0" />

          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center px-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 duration-300 transition-all cursor-pointer"
                />
              </div>
            ))}

            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center px-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 duration-300 transition-all cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
