import React from "react";
import coffeeFour from "../assets/coffee-four.png";

export const NewsLetter = () => {
  return (
    <div className="flex items-start gap-2 p-4 bg-white flex-col md:flex-row">
      <div className="hidden md:block p-4 w-full   ">
        <img
          className="m-auto md:h-[100%] object-cover rounded-md overflow-hidden"
          src={coffeeFour}
          alt="A cup of coffee image"
        />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="w-full md:w-[80%]">
          <h1 className="text-dark-grey font-bold text-xl md:text-2xl lg:text-3xl mt-[3rem]">
            Subsribe to our Newsletter
          </h1>
          <p className="text-light-grey text-sm py-4">
            Be the first to get our exclusive offers and latest news
          </p>
          <input
            placeholder="Enter your email"
            type="text"
            className="form-input px-4 py-3 rounded-xl w-full border-2  border-orange focus:border-none focus:outline-none"
          />
          <button className="bg-orange text-white p-3 rounded-xl px-4 uppercase w-full mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
