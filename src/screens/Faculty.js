import React from "react";
import Ronaldo from "../assets/Ronaldo.webp";

const Faculty = () => {
  return (
    <div id="event" className="py-16">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Principal</h2>
      </div>

      <div className="flex justify-center items-center ">
        <div className="rounded-lg shadow-2xl h-[275px] w-[200px] flex  justify-center pt-3 bg-blue-400">
          <img src={Ronaldo} alt="" className="h-[180px] w-[180px]" />
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
