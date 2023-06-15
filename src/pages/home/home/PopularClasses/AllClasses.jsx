/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import UseClasses from "../../../../hooks/Useclasses";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../../hooks/UseAdmin";
import useInstructor from "../../../../hooks/UseInstructor";
import Loader from "../../../../shared/components/Loader";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, loading, refetch] = UseClasses();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

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
        confirmButtonColor: "#0891B2",
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
    <div>
      <Helmet>
        <title>Aperture Adventure | All Classes</title>
      </Helmet>
      <Zoom>
        <h3 className="headingCyan">
          We have Total   <CountUp delay={1} end={classes.length} /> Photography Classes
        </h3>
      
      </Zoom>

      <div className="flex flex-wrap  gap-5 justify-evenly mt-28">
        {classes.map((cls) => (
          <motion.div
            key={cls._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="card w-96 glass">
              <figure>
                <img
                  className="h-96 hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all"
                  src={cls.image}
                  alt="Classes"
                />
              </figure>
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
                    <span className="font-semibold text-cyan-600">Price: </span>
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
                      Category:
                    </span>{" "}
                    {cls.category}
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
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
