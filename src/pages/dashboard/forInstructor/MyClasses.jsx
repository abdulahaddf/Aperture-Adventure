import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

// import UseClasses from "../../../hooks/Useclasses";


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [classes, setClasses ] = useState([]);
    console.log(classes);
    useEffect(() => {
        fetch(
          `http://localhost:5000/myclass?email=${user.email}`
        )
          .then((response) => response.json())
          .then((data) => setClasses(data));
      }, [user]);


    return (
        <div>
        <Helmet>
          <title>Aperture Adventure | My Classes</title>
        </Helmet>
        <Zoom>
          {" "}
          <h1 className="text-5xl text-center font-semibold my-10 text-cyan-600">
             All My added classes:{classes.length}
          </h1>
        </Zoom>
        <div className="overflow-x-auto">
          <table className="table table-zebra shadow-xl w-full">
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
                  <td>Status LOADING</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClasses;