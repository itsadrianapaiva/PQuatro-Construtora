import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="group flex h-[54px] w-[210px] min-w-[200px] items-center justify-between bg-orange py-[5px] pl-[10px] pr-[5px]">
      <div className="flex-1 text-center font-primary text-sm font-bold uppercase tracking-[1.2px] text-primary">
        {text}
      </div>
      <div className="flex h-11 w-11 items-center justify-center bg-primary">
        <RiArrowRightUpLine className="text-xl text-white transition-all duration-200 group-hover:rotate-45" />
      </div>
    </button>
  );
};

export default Button;
