import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="h-[200px] w-full max-w-[630px] bg-white/90 shadow-custom">
      {/* slide 1 */}
      <SwiperSlide>
        <div className="flex h-full items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative hidden h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.png"
              fill
              className="object-contain"
              quality={100}
              alt="avatar"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p className="">
              A experiência com a empresa foi incrível! Eles superaram todas as
              minhas expectativas e entregaram um trabalho de alta qualidade.
            </p>
            <p className="font-primary font-semibold text-primary">Matias G.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}
      <SwiperSlide>
        <div className="flex h-full items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative hidden h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.png"
              fill
              className="object-contain"
              quality={100}
              alt="avatar"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p className="">
              Não tenho palavras para descrever o quanto estou satisfeito com o
              trabalho realizado. A equipe foi extremamente profissional.
            </p>
            <p className="font-primary font-semibold text-primary">Beth P.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}
      <SwiperSlide>
        <div className="flex h-full items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative hidden h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.png"
              fill
              className="object-contain"
              quality={100}
              alt="avatar"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p className="">
              O Pedro foi super atencioso e prestativo durante todo o processo.
              Adorei a comunicação e o suporte que recebi. Minha casa ficou
              incrivel!
            </p>
            <p className="font-primary font-semibold text-primary">Amanda M.</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
