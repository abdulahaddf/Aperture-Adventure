import { useContext } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const PaymentsHistory = () => {
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
        <title>Aperture Adventure | Payment History</title>
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
                  All My Payments:{classes.length}
                </h1>
              </Zoom>
              <div className="">
                <table className="table table-zebra shadow-xl w-full  text-center overflow-x-auto">
                  {/* head */}
                  <thead className="bg-cyan-600 text-white">
                    <tr>
                      <th>#</th>

                      <th>Class Name</th>
                      <th>Instructor Name</th>
                      <th>Price</th>
                      <th>Transaction ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((classItem, index) => (
                      <tr key={classItem._id}>
                        <th>{index + 1}</th>

                        <td>{classItem.className}</td>
                        <td>{classItem.instructorName}</td>

                        <td>${classItem.price}</td>
                        <td>{classItem.transactionId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </p>{" "}
          </>
        ) : (
          <Zoom>
            <h1 className="headingCyan">You did not purchase any class</h1>
            <div className="text-center">
              <h3 className="text-3xl  font-semibold my-10">
                Please Select Your Desired Class
              </h3>
              <Link to="/allClasses" className="btn-custom">
                Purchase Class
              </Link>
            </div>
          </Zoom>
        )}
      </>
    </div>
  );
};

export default PaymentsHistory;
