import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-16 bg-primary xl:mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-[60px] py-16 xl:flex-row xl:gap-[30px] xl:py-[100px]">
          {/* logo e text */}
          <div className="mb-6 flex flex-1 justify-center xl:justify-start">
            <Logo width={220} />
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 mb-10 text-white">Contato</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-xl text-accent" />
                <p>Campo Grande - Mato Grosso do Sul, Brasil</p>
              </li>
              <li className="mt-4 flex items-center gap-4">
                <RiPhoneFill className="text-xl text-accent" />
                <p>(67) 99335-2525</p>
              </li>
              <li className="mt-4 flex items-center gap-4">
                <RiMailFill className="text-xl text-accent" />
                <p>pquatroconstrutora@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 border-t border-border/10 py-12 xl:flex-row xl:px-0">
        <p className="text-secondary">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <p className="cursor-pointer text-secondary">
          Designed by{" "}
          <a className="underline" href="https://braveracreative.com">
            Bravera Creative
          </a>
        </p>
        <Socials
          containerStyles="flex gap-6 text-secondary"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </footer>
  );
  s;
};

export default Footer;
