import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-0">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              {/* pretitle */}
              <Pretitle text="Sobre Nós" />
              <h2 className="h2 mb-6">Padrão Americano de Qualidade</h2>
              <p className="mb-11">
                Nosso compromisso com excelência nos impulsiona em cada projeto
                iniciado. Com mais de 7 anos de experiência no mercado Americano
                de construção de alto padrão, trouxemos o melhor conceito em
                finalização para Mato Grosso do Sul e demais regiões, garantindo
                que cada projeto não apenas atenda, mas supere as expectativas
                dos nossos clientes.
              </p>
              <div className="mb-10 flex w-max flex-col text-right">
                <Image
                  src="/assets/img/about/signature.png"
                  width={184}
                  height={38}
                  alt="signature"
                />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Fale Conosco" />
            </div>
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="relative xl:h-[493px] xl:w-[444px]">
              {/* bg */}
              <div className="absolute -left-4 -top-4 -z-10 hidden h-[440px] w-[444px] bg-accent xl:flex"></div>
              <Image
                src={"/assets/img/about/img2.jpeg"}
                width={444}
                height={492}
                alt={"mato grosso do sul"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
