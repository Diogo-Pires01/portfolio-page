import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const logos = [
    { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React" },
    { src: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript" },
    { src: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML" },
    { src: "https://cdn.simpleicons.org/css/1572B6", alt: "CSS" },
    { src: "https://cdn.simpleicons.org/express/ffffff", alt: "Express" },
    { src: "https://cdn.simpleicons.org/nodedotjs/339933", alt: "Node.js" },
    { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind" },
  ];

  return (
    <section id="inicio">
      <div className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(254,203,3,0.25),transparent)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_80%,rgba(254,203,3,0.08),transparent)] animate-pulse [animation-delay:1s]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <h1 className="relative font-medium text-lg md:text-4xl 2xl:text-5xl text-font-light">Diogo Pires</h1>
        <h2 className="relative font-bold text-3xl md:text-[64px] 2xl:text-[80px] leading-tight text-white mt-2 2xl:mt-4">Desenvolvedor Web</h2>
        <p className="relative font-medium text-xs md:text-xl 2xl:text-2xl text-font-light text-center mt-2 2xl:mt-6">
          Desenvolvedor Front End e graduando em Ciência da
          <br /> Computação pela IBMR.
        </p>
        <div className="relative my-8 2xl:my-12 flex gap-4">
          <a href="#projetos" className="btn-primary">
            Ver projetos
          </a>
          <a
            href="/docs/CV_DiogoPires_TI.pdf"
            download
            className="btn-secundary"
          >
            Baixar CV <FaDownload className="ml-2 inline-block" />
          </a>
        </div>

        <div className="absolute bottom-20 left-0 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-60 bg-linear-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-60 bg-linear-to-l from-[#0a0a0a] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center px-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer"
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
