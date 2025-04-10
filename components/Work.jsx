import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/restoration.jpeg",
    name: "Restauração",
    description: "Restauração histórica ou por danos.",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpeg",
    name: "Construção",
    description: "Construção de estruturas residenciais e comerciais.",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "Reforma",
    description: "Reformas de estruturas residenciais e comerciais.",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpeg",
    name: "Piscinas",
    description: "Construção e reforma de piscinas.",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[540px] text-center xl:mb-20">
          <Pretitle text="Nossos Projetos" center />
          <h2 className="h2 mb-3">Projetos em Destaque</h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            Conheça alguns dos nossos projetos mais recentes e veja como
            transformamos espaços com nossa experiência e dedicação.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative flex h-[492px] w-full flex-1 justify-center overflow-hidden"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt="projects"
                quality={100}
              />
              <div className="absolute bottom-4 flex h-[84px] w-[90%] items-center justify-between bg-primary text-white transition-all duration-500 md:translate-y-[108px] md:group-hover:translate-y-0">
                <div className="pl-8">
                  <h4 className="font-primary font-semibold uppercase tracking-[1px] text-white">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill
                      className="text-white"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <p className="max-w-[60%] text-xs">{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="absolute right-3 flex h-[44px] w-[44px] items-center justify-center bg-accent text-2xl text-primary xl:h-[60px] xl:w-[60px]"
                >
                  <RiArrowRightUpLine className="text-white" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
