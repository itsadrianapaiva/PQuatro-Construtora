import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="flex items-center bg-gradient-to-t from-[#114230] to-[#00784c] py-4 xl:h-16 xl:py-0"
    >
      <div className="container mx-auto">
        {/* phone, mail & socials */}
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="hidden items-center gap-8 xl:flex">
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                <RiPhoneFill />
              </div>
              <a
                href="tel:6793352525"
                className="font-medium text-white hover:underline"
              >
                (67) 9335-2525
              </a>
            </div>

            {/* mail */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-primary text-white">
                <RiMailFill />
              </div>
              <a
                href="mailto:pquatroconstrutora@gmail.com"
                className="font-medium text-white hover:underline"
              >
                pquatroconstrutora@gmail.com
              </a>
            </div>
          </div>

          {/* socials */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
