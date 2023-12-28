import React from "react";
import Ronaldo from "../assets/Ronaldo.webp"

function Aboutus() {
  return (
    <div id="about-us" className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img className="rounded-lg " src={Ronaldo} alt="Ronaldo" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              libero. Facilis ut suscipit, aliquam neque culpa dignissimos natus
              similique ullam illo officiis velit, libero laboriosam.
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              libero. Facilis ut suscipit, aliquam neque culpa dignissimos natus
              similique ullam illo officiis velit, libero laboriosam.
            </p>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              libero. Facilis ut suscipit, aliquam neque culpa dignissimos natus
              similique ullam illo officiis velit, libero laboriosam.
            </p>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
              libero. Facilis ut suscipit, aliquam neque culpa dignissimos natus
              similique ullam illo officiis velit, libero laboriosam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
