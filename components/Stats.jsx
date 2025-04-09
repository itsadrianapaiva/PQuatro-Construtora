"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "de Satisfação",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Projetos Concluídos",
  },
  {
    endCountNum: 100,
    endCountText: "+",
    text: "de Clientes Atendidos",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Anos de Experiência",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className="mt-16 w-full bg-primary py-10 xl:mt-32">
      <div className="container mx-auto h-full">
        <div className="flex h-full flex-col items-center justify-between gap-12 text-center text-white xl:flex-row">
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      duration={3}
                      delay={0.5}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
