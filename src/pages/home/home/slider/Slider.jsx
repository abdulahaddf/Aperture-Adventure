import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Img } from "react-image";

const imageLinks = [
  "https://i.ibb.co/4NB6G2d/s4-min.jpg",
  "https://i.ibb.co/LhMBKfJ/s1t-min.jpg",
  "https://i.ibb.co/wrS1JWN/s3-min.jpg",
];

const Slider = () => {
  return (
    <div className="relative">
      <Carousel transitionTime={2000} infiniteLoop className="text-center">
        {imageLinks.map((link, index) => (
          <div key={index}>
            <Suspense>

            <Img
              className="object-cover"
              src={link}
              alt={`Slide ${index + 1}`}
              // decode={false}
              />
              </Suspense>
          </div>
        ))}
      </Carousel>
      <div className="absolute top-1/3 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3/4 mx-auto p-2 mr-5 md:mr-48 mt-2 md:mt-0 md:p-5 bg-black bg-opacity-50">
        <Zoom>
          <div>
            <h1 className="text-2xl md:text-7xl text-center mx-auto font-bold text-white">
              Learn Amazing{" "}
              <span className="text-cyan-100 font-extrabold">Photography</span>{" "}
              <br /> With Our Professional{" "}
              <span className="text-cyan-100 font-extrabold">
                Photographers
              </span>
            </h1>
            <div className="text-center mt-5">
              <Link to="/allClasses" className="btn-custom-sm">
                Get Started
              </Link>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Slider;
