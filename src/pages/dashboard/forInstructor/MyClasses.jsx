import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  console.log(classes);
  useEffect(() => {
    fetch(
      `https://apperture-server-abdulahaddf.vercel.app/myclass?email=${user.email}`
    )
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Aperture Adventure | My Classes</title>
      </Helmet>

      {classes.length > 0 ? (
        <>
          <Zoom>
            {" "}
            <h1 className="headingCyan">
              All My Added classes:{classes.length}
            </h1>
          </Zoom>
          <div className="overflow-x-auto">
            <table className="table table-zebra shadow-xl w-full text-center">
              {/* head */}
              <thead className="bg-cyan-600 text-white">
                <tr>
                  <th>#</th>
                  <th>Class Image</th>
                  <th>Class Name</th>
                  <th>Available Seat</th>
                  <th>Price</th>
                  <th>Status</th>
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
                    <td>{classItem.availableSeat}</td>
                    <td>{classItem.price}</td>
                    <td>
                      <button className="btn-custom-sm">Approved</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <Zoom>
            {" "}
            <h1 className="headingCyan">You Have Not Added Classes yet</h1>
            <div className="text-center">
              <h3 className="text-3xl  font-semibold my-10">
                Please add a Class
              </h3>
            </div>
          </Zoom>
        </>
      )}
    </div>
  );
};

export default MyClasses;
