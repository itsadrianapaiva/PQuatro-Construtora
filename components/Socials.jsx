import Link from "next/link";

import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com/pquatroconstrutora/",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/pquatroconstrutora/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
