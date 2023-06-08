// import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { PuffLoader } from "react-spinners";
const ErrorPage = () => {
  return (
    <section className="relative flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Tilt>
          <div className="relative">
            <img
              className="shadow-xl rounded-3xl"
              src="https://i.ibb.co/rpCNGHX/error.png"
              alt=""
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <PuffLoader className="z-10" color="#36d7b7" />
            </div>
          </div>
          <h1 className="px-8 py-3 font-semibold rounded-full shadow-xl text-cyan-600 text-center text-4xl my-4">
            Page Not Found
          </h1>
        </Tilt>

        <Link
          to="/"
          className="absolute bottom-14 px-8 py-3 font-semibold rounded-full shadow-cyan-600 shadow-2xl bg-cyan-600 text-white text-xl my-4 "
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
