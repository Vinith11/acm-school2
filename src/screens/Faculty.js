import React from "react";
import TeachCard from "../Components/TeachCard";
import { princData, facultyData } from "../assets/faculty/index";

const Faculty = () => {
  return (
    <div id="event" className="m-1 py-16">
      {/* Principal */}
      <div className="pt-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Principal</h2>
        </div>

        <div className="flex max-sm:ml-[-3px] max-sm:grid-cols-1 ml-4 gap-4 p-2 justify-center items-center">
          {princData.map((items) => (
            <TeachCard key={items.id} {...items} />
          ))}
        </div>
      </div>

      {/* Faculty */}
      <div className="pt-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Faculty</h2>
        </div>

        <div className="grid grid-cols-4 max-sm:ml-[82px] max-sm:grid-cols-1 ml-4 gap-4 p-2 justify-center items-center">
          {facultyData.map((items) => (
            <TeachCard key={items.id} {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
