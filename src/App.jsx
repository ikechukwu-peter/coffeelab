import React from "react";
import { CoffeeCard } from "./components/CoffeeCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { NewsLetter } from "./components/NewsLetter";

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero rating={4} />

      <section className="bg-light-100">
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Our Collections
          </h1>
          <p className="text-light-grey text-sm mb-4">
            What would you like to sip today?
          </p>
        </div>
        <CoffeeCard />
      </section>

      <section className="flex justify-between bg-light-100 flex-col-reverse md:flex-row">
        <div className="p-4 w-full">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl capitalize">
            Order Your favourite Coffee
          </h1>
          <p className="text-light-grey text-sm py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto
            sunt voluptatem, ducimus laudantium ut voluptatibus in ullam dolores
            eveniet laboriosam neque consectetur, numquam maiores, deserunt quod
            suscipit? Accusamus, cupiditate?
          </p>
          <button className="bg-orange text-white p-3 rounded-lg px-4 uppercase my-2 w-full md:w-auto ">
            View More
          </button>
        </div>
        <div className="p-6 w-full">
          <img
            className="w-full h-auto md:h-[80%] object-cover rounded-md overflow-hidden"
            src="https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="A cup of coffee"
          />
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
