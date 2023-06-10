/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import UseClasses from "../../../../hooks/Useclasses";
import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AllClasses = () => {
  
  const {user} = useContext(AuthContext);
  const [classes,loading,refetch] = UseClasses();
  const navigate = useNavigate();

  const handleSelect =(cls) =>{
    const {_id,className, image,  price, description, instructorName, 
      availableSeat} = cls;
    console.log(cls);
    if(user && user.email){
      const selected = {selectId: _id, className, image,  price, description, instructorName,
        availableSeat, email: user.email}
      fetch('http://localhost:5000/select', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(selected)
      })
      .then(res => res.json())
      .then(data => {
          if(data.insertedId){
              refetch(); 
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: `${className} class is selected.`,
                  showConfirmButton: false,
                  timer: 1500
                })
          }
      })
  }
  else{
      Swal.fire({
          title: 'Please login to select the Class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
  }
  }

  
  return (
    <div>
      <Helmet>
        <title>Aperture Adventure | All Classes</title>
      </Helmet>
      <Zoom>
        <h3 className="text-5xl text-center font-semibold my-10 text-cyan-600">
          We have Total {classes.length} Photography Classes
        </h3>
      </Zoom>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto mt-28">
        {classes.map((cls) => (
          <div key={cls._id}>
            <div className="card w-96 glass">
              <figure>
                <img
                  className="h-96 hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all"
                  src={cls.image}
                  alt="Classes"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title text-3xl font-semibold text-cyan-600">{cls.className}</h2>
                <p><span className="font-semibold text-cyan-600">Description:</span>
                  {cls.description}
                </p>
                <p><span className="font-semibold text-cyan-600">Price: $</span>{cls.price}</p>
                <p><span className="font-semibold text-cyan-600">Instructor:</span>{cls.instructorName}</p>
                <p><span className="font-semibold text-cyan-600">Available Seat:</span>{cls.availableSeat}</p>

                <div className="card-actions justify-end">
                  <button onClick={() => handleSelect(cls)} className="btn-custom">Select Class!</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
