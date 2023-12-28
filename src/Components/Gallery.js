import React from "react";
import Ronaldo from "../assets/Ronaldo.webp"


const Gallery = () => {
  return (
    <div  id="gallery" className="py-16">
      <h2 className="text-4xl font-bold mb-4 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 justify-center items-center">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={Ronaldo}
            alt="Card 1"
            className="w-auto h-auto object-cover rounded-t-lg"
          />
          <div className="p-2">{/* Your content for Card 1 */}</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={Ronaldo}
            alt="Card 2"
            className="w-10/12 h-auto object-cover rounded-t-lg"
          />
          <div className="p-2"></div>
        </div>

        {/* Card 3 */}
        <div className="flex bg-white p-4 rounded-lg shadow-md items-center justify-center">
          <img
            src={Ronaldo}
            alt="Card 3"
            className="w-auto h-60 object-cover rounded-t-lg"
          />
          <div className="p-2">{/* Your content for Card 3 */}</div>
        </div>

        {/* Card 4 */}
        <div className="flex bg-white p-4 rounded-lg shadow-md justify-center">
          <img
            src={Ronaldo}
            alt="Card 3"
            className="w-auto h-60 object-cover rounded-t-lg"
          />
          <div className="p-2">{/* Your content for Card 3 */}</div>
        </div>

        {/* Card 5 */}
        <div className="flex bg-white p-4 rounded-lg shadow-md justify-center">
          <img
            src={Ronaldo}
            alt="Card 3"
            className="w-auto h-60 object-cover rounded-t-lg"
          />
          <div className="p-2">{/* Your content for Card 3 */}</div>
        </div>

        {/* Card 6 */}
        <div className="flex bg-white p-4 rounded-lg shadow-md object-right justify-center">
          <div className="flex-shrink-0">
          <img
            src={Ronaldo}
            alt="Card 3"
            className="w-auto h-60 object-cover rounded-t-lg object-right"
          />
          </div>
          <div className="p-2">{/* Your content for Card 3 */}</div>
        </div>

        {/* Card 7 */}
        <div className="bg-white p-4 rounded-lg shadow-md items-center">
          <img
            src={Ronaldo}
            alt="Card 1"
            className="w-auto h-60 object-cover rounded-t-lg"
          />
          <div className="p-2">{/* Your content for Card 1 */}</div>
        </div>

        {/* Card 8 */}
        <div className="bg-white p-4 rounded-lg shadow-md items-center">
          <img
            src={Ronaldo}
            alt="Card 2"
            className="w-auto h-58 object-cover rounded-t-lg"
          />
          <div className="p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
