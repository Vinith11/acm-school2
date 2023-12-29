import React from "react";
import { galleryImg } from "../assets";
import GallCard from "./GallCard";


const Gallery = () => {
  return (
    <div  id="gallery" className="py-16">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Event</h2>
      </div>

      <div className="flex flex-wrap max-sm:flex-col  gap-4 p-2 justify-center items-center">
        {/* Card 1 */}
        {
          galleryImg.map((items)=>(
            <GallCard key={items.name} {...items}/>
          ))
        }
       
      </div>
    </div>
  );
};

export default Gallery;
