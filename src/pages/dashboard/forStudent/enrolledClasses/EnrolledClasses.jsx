import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const EnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://apperture-server-abdulahaddf.vercel.app/enrolled?email=${user.email}`
      )
      .then((data) => setClasses(data.data));
  }, [classes, user]);

  console.log(classes);

  return (
    <div>
      <Helmet>
        <title>Your Academy | Enrolled Classes</title>
      </Helmet>

      <>
        {classes.length > 0 ? (
          <>
            {" "}
            <p>
              {" "}
              <Zoom>
                {" "}
                <h1 className="headingCyan">
                  All My Purchased classes:{classes.length}
                </h1>
              </Zoom>
              <div className="">
                <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
                  {/* head */}
                  <thead className="bg-cyan-600 text-white">
                    <tr>
                      <th>#</th>
                      <th>Class Image</th>
                      <th>Class Name</th>
                      <th>Instructor Name</th>
                      <th>Available Seat</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((classItem, index) => (
                      <tr key={classItem._id}>
                        <th>{index + 1}</th>
                        <td>
                          <img
                            className="w-32 rounded-md"
                            src={classItem.image}
                            alt=""
                          />
                        </td>
                        <td>{classItem.className}</td>
                        <td>{classItem.instructorName}</td>

                        <td>{classItem.availableSeat}</td>
                        <td>${classItem.price}</td>
                        <>
                          <button className="btn-custom-sm my-5">
                            View Class Content
                          </button>
                        </>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </p>{" "}
          </>
        ) : (
          <Zoom>
            <h1 className="headingCyan">You have not Enrolled Any class</h1>
            <div className="text-center">
              <h3 className="text-3xl  font-semibold my-10">
                Please Select Your Desired Class
              </h3>
              <Link to="/allClasses" className="btn-custom">
                Enroll Class
              </Link>
            </div>
          </Zoom>
        )}
      </>
    </div>
  );
};

export default EnrolledClasses;
