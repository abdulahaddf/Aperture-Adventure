/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import UseClasses from "../../../../hooks/Useclasses";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../../hooks/UseAdmin";
import useInstructor from "../../../../hooks/UseInstructor";
import { Zoom } from "react-awesome-reveal";
import Loader from "../../../../shared/components/Loader";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, loading, refetch] = UseClasses();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const navigate = useNavigate();

  const popularClasses = classes.filter(
    (classItem) => classItem.category == "popular"
  );

  const handleSelect = (cls) => {
    const {
      _id,
      className,
      image,
      price,
      description,
      instructorName,
      availableSeat,
    } = cls;
    console.log(cls);
    if (user && user.email) {
      const selected = {
        selectId: _id,
        className,
        image,
        price,
        description,
        instructorName,
        availableSeat,
        email: user.email,
      };
      fetch("https://apperture-server-abdulahaddf.vercel.app/select", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selected),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${className} class is selected.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="pt-10 w-11/12 mx-auto">
      <div className="bg-cyan-600 w-11/12 h-48 absolute">
        <Zoom>
          <h1 className="heading">Most Popular Classes</h1>
          <p className="font-medium text-center mt-1 text-white">
            Here you can see our best selling classes
          </p>
        </Zoom>
      </div>

      <div className="flex flex-wrap  gap-5 justify-evenly mt-28">
        {popularClasses.slice(0, 6).map((cls) => (
          <div key={cls._id}>
            <motion.div
              key={cls._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              // whileHover={{ scale: 1, rotate: 2 }}
              whileTap={{
                scale: 1,
                rotate: 5,
                borderRadius: "100%",
              }}
            >
              <div className="card w-96 rounded-xl glass h-full">
                <LazyLoad>
                  <figure>
                    <img
                      className="h-96 rounded-xl hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all "
                      src={cls.image}
                      alt="Classes"
                    />
                  </figure>
                </LazyLoad>
                <div>
                  <div className="h-64 p-2">
                    <h2 className="card-title text-3xl font-semibold text-cyan-600">
                      {cls.className}
                    </h2>
                    <p>
                      <span className="font-semibold text-cyan-600">
                        Description:
                      </span>{" "}
                      {cls.description}
                    </p>
                    <p>
                      <span className="font-semibold text-cyan-600">
                        Price:{" "}
                      </span>
                      {""}${cls.price}
                    </p>
                    <p>
                      <span className="font-semibold text-cyan-600">
                        Instructor:
                      </span>{" "}
                      {cls.instructorName}
                    </p>
                    <p>
                      <span className="font-semibold text-cyan-600">
                        Available Seats:
                      </span>{" "}
                      {cls.availableSeat}
                    </p>
                  </div>

                  <div className="grid content-end ">
                    <button
                      onClick={() => handleSelect(cls)}
                      className="btn-custom"
                      disabled={isAdmin || isInstructor}
                    >
                      Select Class!
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
