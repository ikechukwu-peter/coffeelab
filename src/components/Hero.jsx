import React from "react";
import coffee from "../assets/coffee-one.png";
import { RatingDisplay } from "./RatingDisplay";

export const Hero = ({ rating }) => {
  return (
    <div className="bg-light pt-10">
      <div className="flex items-center flex-col md:flex-row justify-between ">
        <div className="flex items-center flex-col px-4">
          <h1 className="font-bold text-3xl text-dark-grey md:text-6xl lg:text-7xl">
            Good Coffee Will <br /> Always find the <br /> Audience
          </h1>
          <p className="text-light-grey py-4 text-sm">
            To give you all the aroma of the Neapolitan blend, enveloping,
            intense and cooked to right point
          </p>

          <div className="flex items-center my-4 gap-4">
            <button className="text-white bg-orange rounded-xl p-3 ">
              Shop Now
            </button>
            <button className="text-orange border-2 border-orange rounded-xl p-3 hover:bg-orange hover:text-white">
              Our Story
            </button>
          </div>
        </div>

        <div className="hidden md:block py-4 drop-shadow-2xl">
          <img src={coffee} alt="A coffee" />
        </div>
      </div>

      <section className="flex flex-col items-center p-4 gap-4 w-full justify-center">
        <div className="flex flex-col p-4 bg-white rounded-xl">
          {/* TODO RATING */}

          <RatingDisplay rating={rating} />

          <p className="text-light-grey text-sm">
            {" "}
            {rating} out of overall 5 stars{" "}
          </p>
          <p className="text-light-grey text-sm">
            Rating for all local business
          </p>
        </div>
      </section>
    </div>
  );
};
