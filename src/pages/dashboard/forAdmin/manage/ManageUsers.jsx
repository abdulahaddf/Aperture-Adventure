/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import UseUsers from "../../../../hooks/UseUsers";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";

const ManageUsers = () => {
  const [users, loading, refetch] = UseUsers();

  //make admin
  const handleMakeAdmin = (user) => {
    fetch(
      `https://apperture-server-abdulahaddf.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //make instructor
  const handleMakeInstructor = (user) => {
    fetch(
      `https://apperture-server-abdulahaddf.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Aperture Adventure | Manage Users</title>
      </Helmet>
      <Zoom>
        <h3 className="headingCyan">Total Users: {users.length}</h3>
      </Zoom>
      <div className="overflow-x-auto">
        <table className="table table-zebra shadow-xl w-full text-center">
          {/* head */}
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-16 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>
                <td>
                  <button
                    className="btn btn-custom-sm m-2"
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin"}
                  >
                    {" "}
                    Make Admin
                  </button>

                  <button
                    className="btn btn-custom-sm"
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user.role === "instructor"}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
