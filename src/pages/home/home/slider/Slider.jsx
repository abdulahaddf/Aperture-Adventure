import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Zoom } from "react-awesome-reveal";


const Slider = () => {
  return (
    <div className=" relative">
  <Carousel
    transitionTime={2000}
    infiniteLoop
    className="text-center"
  >
    <div>
      <img className="object-cover" src="https://i.ibb.co/QH6sxFM/s5.jpg" alt="Slide 1" />
    </div>
    <div>
      <img className="object-cover" src="https://i.ibb.co/R624n87/s4.jpg" alt="Slide 3" />
    </div>
    <div>
      <img className="object-cover" src="https://i.ibb.co/1nRwZy6/s3.jpg" alt="Slide 4" />
    </div>
    <div>
      <img className="object-cover" src="https://i.ibb.co/kJ0x5FD/tourist-taking-photos-nature-landscape-using-his-smartphone-min.jpg" alt="Slide 2" />
    </div>
    <div>
      <img className="object-cover" src="https://i.ibb.co/svy8ZP2/marco-xu-To-UPBCO62-Lw-unsplash.jpg" alt="Slide 5" />
    </div>
  </Carousel>
  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3/4 mx-auto p-2 mr-5 md:mr-48 md:p-5 bg-black bg-opacity-80">
   <Zoom> 
    <div>
      <h1 className="text-2xl md:text-7xl text-center mx-auto font-bold text-white">
        Learn Amazing{" "}
        <span className="text-cyan-100 font-extrabold">Photography</span>{" "}
        <br /> With Our Professional{" "}
        <span className="text-cyan-100 font-extrabold">Photographers</span>
      </h1>
      <div className="text-center mt-5">
        <button className="btn-custom-sm">Get Started</button>
      </div>
    </div>
    </Zoom>
  </div>
</div>

  );
};

export default Slider;
