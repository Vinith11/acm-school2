import React from "react";

const TeachCard = ({ img, name, width, height }) => {
  return (
    <>
      <div className="pt-10">
        <div className="rounded-lg shadow-2xl h-[275px] w-[200px] flex flex-col justify-center items-center pt-3 bg-blue-400 ">
          <img src={img} alt="" className={`h-[${height}] w-[${width}] `} />
          <div className="flex">
            <p className="text-center font-semibold">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachCard;
