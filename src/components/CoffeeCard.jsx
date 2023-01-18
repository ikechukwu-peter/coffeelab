import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { coffees } from "../data/coffee";
import { RatingDisplay } from "./RatingDisplay";

export const CoffeeCard = () => {
  const [state, setState] = useState(null);

  //get screen size
  const screenSize = window.screen.width;

  const [isMobile, setIsMobile] = useState(screenSize >= 768 ? false : true);
  const [isTab, setIsTab] = useState(
    screenSize >= 768 && screenSize <= 1023 ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(screenSize >= 768 ? false : true);
      setIsTab(screenSize >= 768 && screenSize <= 1023 ? true : false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, isTab]);

  useEffect(() => {
    setTimeout(() => {
      setState(coffees);
    }, 2000);
  }, []);

  return (
    <div className="flex gap-3 py-6 items-center justify-between mt-6">
      {!!state?.length ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={10}
          slidesPerView={isMobile ? 1 : isTab ? 2 : 3}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {state.map((coffee, index) => (
            <SwiperSlide key={index}>
              <Card {...coffee} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-center font-bold text-orange">
          LOADING
        </div>
      )}
    </div>
  );
};

const Card = ({ title, image, description, price, rating, reviews }) => {
  return (
    <div className="px-2 py-10 relative w-full bg-light-100">
      <div className="bg-white rounded-xl p-4 flex flex-col px-10">
        <div className="absolute  top-1 left-[50%]">
          <div className="relative w-20 h-20 -left-[50%]">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
        <h1 className="text-dark-grey font-bold text-sm md:text-md lg:text-xl mt-[3rem]">
          {title}
        </h1>
        <p className="text-light-grey text-sm py-4">{description}</p>

        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2">
            <RatingDisplay rating={rating} />
            <p className="text-dark-grey">({reviews}) Reviews</p>
          </div>
          <p className="text-dark-grey">${price}</p>
        </div>
        <div className="flex justify-center my-2">
          <button className="w-full md:w-[50%] bg-orange text-white p-3 rounded-lg px-4 uppercase ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
