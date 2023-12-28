import React from "react";
import Ronaldo from "../assets/Ronaldo.webp";

const Card = () => {
  return (
    <div>
      <div className="w-1/4">
        <div className="h-[200px] w-[325px] p-7">
          <img
            src={Ronaldo}
            alt="Card 1"
            className=" h-[160px] w-[290px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
