import { useContext, useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const [classes, setClasses] = useState([]);
  // console.log(classes);
  useEffect(() => {
    fetch(
      `https://apperture-server-abdulahaddf.vercel.app/select?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, [user, classes]);

  const handleDelete = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your selected class will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0891B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://apperture-server-abdulahaddf.vercel.app/select/${cls._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Your Academy | Selected Classes</title>
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
                  All My selected classes:{classes.length}
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
                        <td>
                          <button
                            onClick={() => handleDelete(classItem)}
                            className="btn-custom-sm m-2 w-24"
                          >
                            delete
                          </button>
                          <Link
                            to="/dashboard/pay"
                            state={{ price: classItem.price, cls: classItem }}
                            className="btn-custom-sm w-24"
                          >
                            Pay
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </p>{" "}
          </>
        ) : (
          <>
            <Zoom>
              {" "}
              <h1 className="headingCyan">You Have Not Select Classes yet</h1>
              <div className="text-center">
                <h3 className="text-3xl  font-semibold my-10">
                  Please Select Your Desired Class
                </h3>
                <Link to="/allClasses" className="btn-custom">
                  Select Class
                </Link>
              </div>
            </Zoom>
          </>
        )}
      </>
    </div>
  );
};

export default SelectedClasses;
