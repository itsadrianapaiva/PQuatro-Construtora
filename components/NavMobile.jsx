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
import Button from "./Button";

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
              <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <Logo />
              </div>
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
            <Button
              text="Solicitar Orçamento"
              color="white"
              onClick={() => setIsOpen(false)}
            />
          </div>
          {/* socials */}
          <Socials containerStyles="text-white text-xl flex gap-6 mt-4" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
