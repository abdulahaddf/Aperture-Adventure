import { Zoom } from "react-awesome-reveal";
import UseClasses from "../../../../hooks/Useclasses";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [classes] = UseClasses();
  console.log(classes);
  return (
    <div>
      <Helmet>
        <title>Aperture Adventure | Manage Classes</title>
      </Helmet>
      <Zoom>
        {" "}
        <h1 className="text-5xl text-center font-semibold my-10 text-cyan-600">
          Manage All classes:{classes.length}
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
              <th>Instructor Name</th>
              <th>Instructor Email</th>
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
                <td>{classItem.instructorName}</td>
                <td>{classItem.instructorEmail}</td>
              
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

export default ManageClasses;
