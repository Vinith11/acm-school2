import React from "react";
import Topdiv from "../Components/Topdiv";
import Aboutus from "../Components/Aboutus";
import Gallery from "../Components/Gallery";
import Contactus from "../Components/Contactus";

function Home() {
  return (
    <>
      <Topdiv/>
      <Aboutus />
      <Gallery />
      <Contactus />
    </>
  );
}

export default Home;
