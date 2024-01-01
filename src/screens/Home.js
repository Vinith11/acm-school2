import React from "react";
import Topdiv from "../Components/Topdiv";
import Aboutus from "../Components/Aboutus";
import Gallery from "./Gallery";
import Contactus from "./Contactus";

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
