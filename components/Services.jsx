"use client";
import React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const serviceData = [
  {
    name: "construção",
    icon: <PiWallFill />,
    title: "Serviços de Construção",
    description:
      "Construímos com precisão e inovação, garantindo que cada detalhe transpareça qualidade. Da fundação à finalização, nossa equipe dedicada transforma sua visão em realidade.",
    serviceList: [
      "Construção residencial",
      "Construção comercial",
      "Design de interiores",
      "Gerenciamento de projetos",
      "Concretagem e alvenaria",
      "Piscinas e áreas externas",
      "Instalações elétricas e hidráulicas",
      "Acabamentos e revestimentos",
    ],
    thumbs: [
      { url: "/optimized/services/thumb-1.webp" },
      { url: "/optimized/services/thumb-3.webp" },
    ],
  },
  {
    name: "reforma",
    icon: <PiPaintRollerFill />,
    title: "Serviços de Reforma",
    description:
      "Renovamos espaços com designs modernos e funcionais, respeitando a suas necessidades. Quer você esteja reformando sua casa ou escritório, trazemos uma perspectiva internacional para cada projeto.",
    serviceList: [
      "Reformas de cozinha",
      "Reformas de banheiro",
      "Pintura interna e externa",
      "Reforma de fachadas",
      "Reforma de pisos e revestimentos",
      "Instalações elétricas e hidráulicas",
      "Reforma de telhados e coberturas",
    ],
    thumbs: [
      { url: "/optimized/services/thumb-2.webp" },
      { url: "/optimized/services/thumb-4.webp" },
    ],
  },
  {
    name: "restauração",
    icon: <PiWrenchFill />,
    title: "Serviços de Restauração",
    description:
      "Trazemos de volta a beleza e a funcionalidade de estruturas antigas, respeitando sua história. Nossa equipe especializada em restauração garante que cada projeto seja tratado com o máximo cuidado e atenção aos detalhes.",
    serviceList: [
      "Restauração histórica",
      "Danos de água",
      "Danos de incêndio",
      "Danos estruturais",
      "Remoção de mofo",
      "Restauracão de telhados",
    ],
    thumbs: [
      { url: "/optimized/services/thumb-5.webp" },
      { url: "/optimized/services/thumb-6.webp" },
    ],
  },
  {
    name: "piscinas",
    icon: <PiUserGearFill />,
    title: "Serviços de Piscina",
    description:
      "Criamos e reformamos piscinas com design inovador e funcionalidade. Nossa equipe especializada garante que cada projeto atenda às suas necessidades e expectativas.",
    serviceList: [
      "Construção de piscinas",
      "Reforma de piscinas",
      "Instalação de sistemas de filtragem",
      "Instalação de aquecimento",
      "Instalação de iluminação",
    ],
    thumbs: [
      { url: "/optimized/services/thumb-7.webp" },
      { url: "/optimized/services/thumb-8.webp" },
    ],
  },
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("construção");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mb-20 max-w-[540px] text-center"
        >
          <Pretitle text="Nossos Serviços" center />
          <h2 className="h2 mb-3">Soluções Que Oferecemos</h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            Oferecemos soluções personalizadas em construção e reforma, com foco
            em alta qualidade e satisfação do cliente. Nossa equipe experiente
            garante resultados excepcionais em cada projeto, seja residencial ou
            comercial.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construção"
            onValueChange={(value) => setActiveTab(value)}
            className="flex w-full flex-col gap-[30px] xl:flex-row"
          >
            <TabsList className="grid h-full w-full grid-cols-1 gap-[30px] rounded-none bg-transparent p-0 md:grid-cols-2 xl:w-[345px] xl:grid-cols-1">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    value={item.name}
                    key={item.name}
                    className="relative flex h-[100px] w-full items-center rounded-none p-0 shadow-custom outline-none"
                  >
                    <div
                      className={`absolute left-0 flex h-[100px] w-[100px] items-center justify-center ${activeTab === item.name ? "bg-orange text-primary" : "bg-accent text-white"}`}
                    >
                      {React.cloneElement(item.icon, {
                        style: { width: "30px", height: "30px" },
                      })}
                    </div>
                    <div className="trancking-[.6px] ml-16 w-[100px] font-primary text-base font-semibold uppercase">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="h-[490px] flex-1 bg-white p-[30px] shadow-custom">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col gap-[30px] md:flex-row"
                  >
                    {/* images */}
                    <div className="flex gap-5 md:flex-col xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative h-[140px] w-[140px] xl:h-[200px] xl:w-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            fill
                            alt="thumb image"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div className="">
                      <div className="">
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="mb-10 grid grid-cols-2 gap-4">
                          {item.serviceList.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="h-[6px] w-[6px] bg-accent"></div>
                              <div className="font-medium capitalize text-primary">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                        {/* btn */}
                        <Button text="Entre em contato" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
