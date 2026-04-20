const About = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden sm:overflow-x-visible"
    >
      <div className="w-full max-w-5xl">
        <div className="relative flex flex-col items-center">
          <h1 className="absolute -top-10 text-9xl font-bold text-white/3 whitespace-nowrap select-none">
            SOBRE MIM
          </h1>

          <h2 className="relative text-5xl 2xl:text-6xl font-semibold text-white">
            Sobre mim
          </h2>

          <span className="w-33 h-1.25 bg-primary rounded-full" />
        </div>
        <div className="max-w-3xl ml-4">
          <h2 className="font-semibold text-3xl 2xl:text-4xl mt-20 2xl:mt-28 text-white">
            Eu sou <span className="text-primary">Diogo Pires</span>,
            desenvolvedor Front End e estudante de Ciência da Computação.
          </h2>
          <p className="font-medium text-xl 2xl:text-2xl text-font-light mt-8 2xl:mt-10">
            Atualmente atuo como estagiário na área de desenvolvimento, onde
            tenho contato com demandas reais, prototipação, versionamento de
            código, metodologias ágeis e trabalho em equipe.
          </p>
          <p className="font-medium text-xl 2xl:text-2xl text-font-light mt-8 2xl:mt-10">
            Possuo experiência com React, JavaScript, TypeScript, HTML, CSS,
            Tailwind CSS, Figma e Git, focando na construção de interfaces
            modernas, responsivas e bem estruturadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
