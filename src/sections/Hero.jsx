import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="inicio">
      <div className="min-h-screen bg-[linear-gradient(180deg,#999999_15%,#FFFFFF_85%)]">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="font-medium text-lg md:text-4xl">Diogo Pires</h1>
          <h2 className="font-bold text-3xl md:text-[64px]">
            Desenvolvedor Web
          </h2>
          <p className="font-medium text-xs md:text-xl text-font-light text-center">
            Desenvolvedor Front End e graduando em Ciência da
            <br /> Computação pela IBMR.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#projetos" className="btn-primary">
              Ver projetos
            </a>
            <a href="" download className="btn-secundary">
              Baixar CV <FaDownload className="ml-2 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
