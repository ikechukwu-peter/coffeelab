import React, { useState } from "react";
import { BsCart3, BsSuitHeart, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Cafe News", to: "/cafe" },
  { name: "News", to: "/news" },
  { name: "Contact Us", to: "/contact" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const currentRoute = window.location.pathname;

  return (
    <div className=" w-full bg-light h-[80px] relative">
      <div className="flex justify-between items-center h-full px-4">
        <h1 className="flex items-center text-lg font-bold underline underline-offset-8">
          <a href="/">CoffeeLab</a>
        </h1>
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map(({ name, to }) => (
            <li
              key={name + to}
              className={`hover:text-orange text-${
                currentRoute === to ? "orange" : "brown"
              }`}
            >
              <a href={to}>{name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <div>
            <BsSearch />
          </div>
          <div>
            <BsSuitHeart />
          </div>
          <div className="flex items-center">
            <BsCart3 />
            <sup className="text-red">3</sup>
          </div>
          <div className="rounded">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="An avatar"
              className="w-7 h-7 rounded-3xl"
            />
          </div>
        </div>

        <div className=" pr-2 md:hidden">
          {isOpen ? (
            <MdOutlineClose
              className="text-red font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          ) : (
            <FiMenu
              className="text-red font-bold text-xl w-7"
              onClick={handleIsOpen}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="bg-light-grey p-4 absolute w-full md:hidden  ">
          <ul className=" flex flex-col items-start gap-4">
            {navLinks.map(({ name, to }) => (
              <li
                key={name + to}
                className={`hover:text-orange text-${
                  currentRoute === to ? "orange" : "brown"
                }`}
              >
                <a href={to}>{name}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:hidden flex items-center justify-between gap-6">
            <div>
              <BsSearch />
            </div>
            <div>
              <BsSuitHeart />
            </div>
            <div className="flex items-center">
              <BsCart3 />
              <sup className="text-red">3</sup>
            </div>
            <div className="rounded">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="An avatar"
                className="w-7 h-7 rounded-3xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
