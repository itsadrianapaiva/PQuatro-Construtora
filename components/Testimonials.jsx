import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import { delay, motion } from "framer-motion";
import { fadeIn } from "../variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="relative flex flex-col xl:flex-row">
          {/* txt */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="mb-12 max-w-[484px] flex-1 xl:mb-0 xl:pt-[54px]"
          >
            <Pretitle text="Depoimentos" />
            <h2 className="h2 mb-6">
              Resultados Que Refletem Satisfação e Confiança
            </h2>
            <p className="mb-10 max-w-[420px]">
              Veja o que nossos clientes têm a dizer sobre nossos serviços e
              compromisso com a qualidade.
            </p>
            <Button text="Fale Conosco" />
          </motion.div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-1 flex-col xl:flex-row xl:justify-end"
          >
            <div className="xl-flex relative xl:h-[380px] xl:w-[550px]">
              <Image
                src="/optimized/testimonials/img3.webp"
                fill
                className="object-cover"
                loading="lazy"
                alt="testimonials"
                quality={100}
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="relative max-w-max xl:absolute xl:bottom-0 xl:right-[160px]"
            >
              {/* quote img */}
              <Image
                src="/assets/img/testimonials/quotes.svg"
                width={54}
                height={36}
                alt="quote"
                className="absolute -top-4 left-[60px] z-20"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
