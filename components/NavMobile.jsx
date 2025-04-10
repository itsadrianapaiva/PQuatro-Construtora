"use client";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { RiMenu3Fill, RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Sobre nós",
    path: "about",
  },
  {
    name: "Serviços",
    path: "services",
  },
  {
    name: "Projetos",
    path: "projects",
  },
  {
    name: "Contato",
    path: "contact",
  },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex items-center justify-center text-3xl text-white"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="border-none bg-primary text-white">
        <div className="flex h-full flex-col items-center justify-start pb-8 pt-16">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="mt-12 flex w-full flex-col justify-center gap-10 text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="font-primary text-sm font-medium uppercase tracking-[1.2px] text-white"
                >
                  <ScrollLink
                    to={link.path}
                    spy
                    smooth
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-[#02c87f]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            {/* btn */}
            <button className="group flex h-[54px] w-[210px] min-w-[200px] items-center justify-between bg-white py-[5px] pl-[10px] pr-[5px]">
              <div className="flex-1 text-center font-primary text-sm font-bold uppercase tracking-[1.2px] text-primary">
                solicitar orçamento
              </div>
              <div className="flex h-11 w-11 items-center justify-center bg-primary">
                <RiArrowRightUpLine className="text-xl text-white transition-all duration-200 group-hover:rotate-45" />
              </div>
            </button>
          </div>
          {/* socials */}
          <Socials containerStyles="text-white text-xl flex gap-6 mt-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
