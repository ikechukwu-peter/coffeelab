import React from "react";
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const socials = [
  { name: "Facebook", Icon: BsFacebook, url: "https://facebook.com" },
  { name: "Instagram", Icon: BsInstagram, url: "https://instagram.com" },
  { name: "BsTwitter", Icon: BsTwitter, url: "https://twitter.com" },
  { name: "BsYoutube", Icon: BsYoutube, url: "https://youtube.com" },
];

export const Footer = () => {
  return (
    <div className="w-full px-4 flex items-start gap-4 flex-col md:items-center md:flex-row  justify-between my-6">
      <div className="flex items-center">
        <h1 className="text-dark-grey text-md font-bold underline underline-offset-8 ">
          <a href="/">CoffeeLab</a>
        </h1>
      </div>

      <ul className="flex items-center gap-4">
        {!!socials?.length &&
          socials.map(({ name, Icon, url }, index) => (
            <li key={index + name}>
              <a href={url} target="_blank" className="text-dark-grey">
                <Icon />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
