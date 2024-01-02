import React from "react";

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3838.597220512739!2d74.50378215211487!3d15.825178188571702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ5JzMwLjIiTiA3NMKwMzAnMTQuNCJF!5e0!3m2!1sen!2sin!4v1704185390103!5m2!1sen!2sin"
        width={600}
        height={450}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
