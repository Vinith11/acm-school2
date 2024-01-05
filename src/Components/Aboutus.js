import React from "react";
import img2 from "../assets/Images/img2.jpg"

function Aboutus() {
  return (
    <div id="about-us" className="py-16 bg-white dark:bg-black">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img className="rounded-lg " src={img2} alt="Ronaldo" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-gray-600">
            Welcome to Government Kannada Lower Primary School, a cornerstone of education in our community. Our mission is to empower students with knowledge and foster a love for learning, nurturing well-rounded individuals who contribute positively to society.
            </p>
            <p className="mt-4 text-gray-600">
            At Government Kannada Lower Primary School, our educational philosophy extends beyond textbooks. We focus on cultivating curiosity, critical thinking, and a passion for lifelong learning. By addressing the intellectual, emotional, and social dimensions of each child, we aim to build a strong foundation for their future endeavors.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
