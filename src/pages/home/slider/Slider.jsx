import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
 
  <div className="absolute">
    <Carousel
      autoPlay
      interval={3000}
      transitionTime={2000}
      infiniteLoop
      className="text-center"
    >
      <div>
        <img src="https://i.ibb.co/QH6sxFM/s5.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://i.ibb.co/sbR8tmc/s2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://i.ibb.co/R624n87/s4.jpg" alt="Slide 3" />
      </div>
      <div>
        <img src="https://i.ibb.co/1nRwZy6/s3.jpg" alt="Slide 4" />
      </div>
      <div>
        <img src="https://i.ibb.co/CP4bxnw/s1.jpg" alt="Slide 5" />
      </div>
    </Carousel>
  </div>
  <div className="relative top-28 flex  w-3/4 mx-auto p-5 bg-black bg-opacity-60">
    <div>
    <h1 className="text-7xl text-center font-bold text-white">
      Learn Amazing <span className="text-emerald-100 font-extrabold">Photography</span> <br /> With Our Professional <span className="text-emerald-100 font-extrabold">Photographers</span>
    </h1>
   <div className="text-center mt-5">
   <button className="btn btn-sm">Get Started</button>
   </div>
    </div>
  </div>
</div>

  );
};

export default Slider;
