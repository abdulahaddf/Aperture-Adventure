/* eslint-disable react/no-unescaped-entities */
import { Zoom } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className=" w-11/12 mx-auto   ">
      <div className="bg-cyan-600 w-11/12 mx-auto h-48 absolute">
        <Zoom>
          <h3 className="heading">
            Students Feedback
          </h3>
          <p className="font-medium text-center mt-1 text-white">
            Here you can see our students feedback in different times
          </p>
        </Zoom>
      </div>

      <div className="hidden sm:block pt-20">
        <Marquee speed={100}>
          <div className="flex gap-10">
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/PrJY8XX/1.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mark Henrey
                </h2>
                <p>
                  I love this photography class at the summer camp! The
                  instructor is knowledgeable and provides great insights. The
                  hands-on approach and opportunity to practice in different
                  settings have helped me improve my photography skills. Highly
                  recommended!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/0YKvSz1/chef4.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Glen Maxwel
                </h2>
                <p>
                  I had a fantastic experience with the photography class at the
                  summer camp. The instructor's guidance and the practical
                  assignments helped me explore my creativity and improve my
                  skills. I highly recommend this class to photography
                  enthusiasts!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/mNDKM1W/4.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Tim Devid
                </h2>
                <p>
                  The photography class at the summer camp was amazing! The
                  instructor's expertise and the hands-on approach helped me
                  enhance my photography skills. I enjoyed every moment and
                  learned valuable techniques. Thank you!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/5sXr2hc/3.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mark Stonies
                </h2>
                <p>
                  I had an incredible experience with the photography class at
                  the summer camp. The instructor's guidance and the opportunity
                  to practice in different settings have helped me develop my
                  photography skills. I'm grateful for the knowledge gained
                  during this class!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/DtgLxxz/chef5.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mitchel Stack
                </h2>
                <p>
                  I'm so glad I took the photography class at the summer camp.
                  The instructor's guidance and the practical assignments helped
                  me understand different techniques and improve my photography.
                  It was a fun and enriching experience that I highly recommend!
                </p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="block sm:hidden pt-20 ">
        <div
          className="flex flex-col mx-auto gap-10 text-cyan-700"
          data-aos="zoom-in-down"
        >
          <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/PrJY8XX/1.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mark Henrey
                </h2>
                <p>
                  I love this photography class at the summer camp! The
                  instructor is knowledgeable and provides great insights. The
                  hands-on approach and opportunity to practice in different
                  settings have helped me improve my photography skills. Highly
                  recommended!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/0YKvSz1/chef4.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Glen Maxwel
                </h2>
                <p>
                  I had a fantastic experience with the photography class at the
                  summer camp. The instructor's guidance and the practical
                  assignments helped me explore my creativity and improve my
                  skills. I highly recommend this class to photography
                  enthusiasts!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/mNDKM1W/4.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Tim Devid
                </h2>
                <p>
                  The photography class at the summer camp was amazing! The
                  instructor's expertise and the hands-on approach helped me
                  enhance my photography skills. I enjoyed every moment and
                  learned valuable techniques. Thank you!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/5sXr2hc/3.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mark Stonies
                </h2>
                <p>
                  I had an incredible experience with the photography class at
                  the summer camp. The instructor's guidance and the opportunity
                  to practice in different settings have helped me develop my
                  photography skills. I'm grateful for the knowledge gained
                  during this class!
                </p>
              </div>
            </div>
            <div className="card w-96 mx-2 my-10 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://i.ibb.co/DtgLxxz/chef5.jpg"
                  alt="student"
                  className="rounded-full w-24 h-24 border-4 border-cyan-700"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-cyan-700 font-bold">
                  Mitchel Stack
                </h2>
                <p>
                  I'm so glad I took the photography class at the summer camp.
                  The instructor's guidance and the practical assignments helped
                  me understand different techniques and improve my photography.
                  It was a fun and enriching experience that I highly recommend!
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
