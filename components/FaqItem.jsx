import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
        <button
          className="flex h-[44px] w-[44px] items-center justify-center bg-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-2xl text-white transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-2xl text-white transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>

      {/* description */}
      <div
        className={`${
          isOpen
            ? "max-h-[300px] opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <p className="flex max-w-[860px] items-center pb-8">{description}</p>
      </div>
    </div>
  );
};

export default FaqItem;
