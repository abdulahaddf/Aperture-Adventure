import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {  Zoom } from "react-awesome-reveal";

const Slider = () => {
  return (
    <div className="mb-[30vh] md:mb-[100vh]">
 
  <div className="absolute">
    <Carousel
      autoPlay
      interval={3500}
      transitionTime={2000}
      infiniteLoop
      className="text-center "
    >
      <div>
        <img src="https://i.ibb.co/QH6sxFM/s5.jpg" alt="Slide 1" />
      </div>
     
      <div>
        <img src="https://i.ibb.co/R624n87/s4.jpg" alt="Slide 3" />
      </div>
      <div>
        <img src="https://i.ibb.co/1nRwZy6/s3.jpg" alt="Slide 4" />
      </div>
      <div>
        <img src="https://i.ibb.co/sbR8tmc/s2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://i.ibb.co/CP4bxnw/s1.jpg" alt="Slide 5" />
      </div>
    </Carousel>
  </div>
  <Zoom>
  <div className="relative top-16 md:top-28 flex  w-3/4 mx-auto p-2 mr-5 md:mr-48 md:p-5 bg-black bg-opacity-60">
    <div>
    <h1 className="text-2xl md:text-7xl text-center mx-auto font-bold text-white">
      Learn Amazing <span className="text-emerald-100 font-extrabold">Photography</span> <br /> With Our Professional <span className="text-emerald-100 font-extrabold">Photographers</span>
    </h1>
   <div className="text-center mt-5">
   <button className="btn-custom-sm">Get Started</button>
   </div>
    </div>
  </div>
      </Zoom>

</div>

  );
};

export default Slider;
