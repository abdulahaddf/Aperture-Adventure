import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SelectedClasses = () => {

    const {user} = useContext(AuthContext);
    const [classes, setClasses ] = useState([]);
    console.log(classes);
    useEffect(() => {
        fetch(
          `http://localhost:5000/select?email=${user.email}`
        )
          .then((response) => response.json())
          .then((data) => setClasses(data));
      }, [user,classes]);



      const handleDelete = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your selected class will be deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0891B2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/select/${cls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }






    return (
        <div>
             <Helmet>
                <title>Aperture Adventure | Selected Classes</title>
            </Helmet>
           <>
           {
            classes.length > 0 ? <> <p> <Zoom>
            {" "}
            <h1 className="text-5xl text-center font-semibold my-10 text-cyan-600">
               All My selected classes:{classes.length}
            </h1>
          </Zoom>
          <div className="overflow-x-auto">
          <table className="table table-zebra shadow-xl w-full  text-center">
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
                  <td>{classItem.price}</td>
                  <td>
                      <button onClick={()=>handleDelete(classItem)} className="btn-custom-sm">delete</button>
                      <button className="btn-custom-sm">Pay</button>
                      </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></p> </> : <><Zoom>
            {" "}
            <h1 className="text-5xl text-center font-semibold my-10 text-cyan-600">
               You Have Not Select Classes yet
            </h1>
           <div className="text-center">
           <h3 className="text-3xl  font-semibold my-10">Please Select Your Desired Class</h3>
            <Link to="/allClasses" className="btn-custom">Select Class</Link>
           </div>
          </Zoom></>
           }
           </>


        </div>
    );
};

export default SelectedClasses;