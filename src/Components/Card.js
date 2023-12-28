import React from "react";
import Ronaldo from "../assets/Ronaldo.webp";

const Card = ({img, height, width}) => {
  return (
    <div>
      <div className="w-1/4">
        <div className="h-[200px] w-[325px] p-7">
          <img
            src={img}
            alt="Card 1"
            className={`h-${height} w-${width} object-cover rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
