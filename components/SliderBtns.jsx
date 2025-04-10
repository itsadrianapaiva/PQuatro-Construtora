"use client";
import { useSwiper, useSwipper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-2 right-2 z-10 flex w-max gap-1">
      <button
        className="h-[48px] flex w-[48px] cursor-pointer items-center justify-center bg-accent text-[22px] text-white transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="h-[48px] flex w-[48px] cursor-pointer items-center justify-center bg-accent text-[22px] text-white transition-all"
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderBtns;
