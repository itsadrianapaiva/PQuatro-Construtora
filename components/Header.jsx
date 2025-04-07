"use client";

import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

//components
import Logo from "./Logo";
import NavMobile from "./NavMobile";

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

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />

          {/* nav & btn */}
          <nav className="hidden items-center gap-12 xl:flex">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="font-primary text-sm font-medium uppercase tracking-[1.2px] text-white after:mx-4 after:text-[#02c87f] after:content-['/'] last:after:content-none"
                  >
                    <ScrollLink
                      to={link.path}
                      spy
                      smooth
                      className="cursor-pointer"
                      activeClass="text-[#02c87f]"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            {/* btn */}
            <button className="group flex h-[50px] w-[200px] min-w-[200px] items-center justify-between bg-white py-[5px] pl-[10px] pr-[5px]">
              <div className="flex-1 text-center font-primary text-sm font-bold uppercase tracking-[1.2px] text-primary">
                Entre em contato
              </div>
              <div className="flex h-11 w-11 items-center justify-center bg-primary">
                <RiArrowRightUpLine className="text-whote text-xl transition-all duration-200 group-hover:rotate-45" />
              </div>
            </button>
          </nav>

          {/* mobile nav */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
