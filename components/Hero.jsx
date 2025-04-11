import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-cover bg-center bg-no-repeat">
      {/* overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/10 via-black/70 to-black/90"></div>
      <div className="container mx-auto flex h-full items-center">
        <div className="z-20 mx-auto flex max-w-[608px] flex-col items-center text-center text-white xl:mx-0 xl:items-start xl:text-left">
          <h1 className="h1 mb-4 text-white">
            Sua Referência em Reformas de
            <span className="border-b border-orange italic"> Alto Padrão</span>
          </h1>
          <p className="mb-9">
            Do conceito a realização, nós asseguramos que cada detalhe é
            otimizado para excelência e durabilidade, construindo soluções que
            inspiram confiança e permanecem intactas por anos.
          </p>
          {/* btn */}
          <div className="">
            <Button text="Solicitar Orçamento" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
