import React from "react";
import Card from "../Components/Card";

const Events = () => {
  return (
    <div id="event" className="py-16">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Event</h2>
      </div>

      <div className="flex flex-wrap max-sm:flex-col  gap-4 p-2 justify-center items-center">
        {/* Card 1 */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>        
      </div>
    </div>
  );
};

export default Events;
