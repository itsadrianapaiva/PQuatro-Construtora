import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-cover bg-center bg-no-repeat">
      {/* overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/10 via-black/70 to-black/90"></div>
      <div className="container mx-auto flex h-full items-center">
        <div className="z-20 mx-auto flex max-w-[608px] flex-col items-center text-center text-white xl:mx-0 xl:items-start xl:text-left text-balance">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 mb-4 text-white/90"
          >
            Sua Referência em Reformas de
            <span className="border-b border-accent text-white">
              {" "}
              Alto Padrão
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Do conceito a realização de projetos residenciais e comerciais, nós
            asseguramos que cada detalhe é otimizado para excelência e
            durabilidade, construindo soluções que inspiram confiança e
            permanecem intactas por anos.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="Solicitar Orçamento" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
