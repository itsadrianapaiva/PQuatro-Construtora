import React from "react";
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
          <a
            href={item.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyles}`}
          >
            {React.cloneElement(item.icon, {
              style: { width: "20px", height: "20px" },
            })}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
