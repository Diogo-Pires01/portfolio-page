import React from "react";

const About = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-5xl">
        <div className="relative flex flex-col items-center">
          <h1 className="absolute -top-10 text-9xl font-bold text-black/5 whitespace-nowrap select-none">
            SOBRE MIM
          </h1>

          <h2 className="relative text-5xl font-semibold text-black">
            Sobre mim
          </h2>

          <span className="w-33 h-1.25 bg-primary rounded-full" />
        </div>
        <div className="max-w-3xl ml-4">
          <h2 className="font-semibold text-3xl mt-20">
            Eu sou <span className="text-primary">Diogo Pires</span>,
            desenvolvedor Front End e estudante de Ciência da Computação.
          </h2>
          <p className="font-medium text-xl text-font-light mt-8">
            Atualmente atuo como estagiário na área de desenvolvimento, onde
            tenho contato com demandas reais, prototipação, versionamento de
            código, metodologias ágeis e trabalho em equipe.
          </p>
          <p className="font-medium text-xl text-font-light mt-8">
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
