"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Projects",
    path: "Projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 bg-primary py-4">
      <div className="container mx-auto">
        <ul className="flex gap-12 text-white">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  spy
                  smooth
                  className="cursor-pointer"
                  activeClass="text-accent"
                >
                  {link.name}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
