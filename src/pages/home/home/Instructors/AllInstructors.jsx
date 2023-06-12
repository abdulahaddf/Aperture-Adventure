import { Helmet } from "react-helmet-async";
import UseUsers from "../../../../hooks/UseUsers";
import { Zoom } from "react-awesome-reveal";
import Loader from "../../../../shared/components/Loader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AllInstructors = () => {
  const [users,loading] = UseUsers();
  const instructors = users.filter(
    (instructor) => instructor.role == "instructor"
  );
  // console.log(instructors);
  if(loading){
    return <Loader></Loader>
  }
  return (
    <div>
      <Helmet>
        <title>Aperture Adventure | Instructors</title>
      </Helmet>
      <Zoom>
        <h3 className="headingCyan">
          We have {instructors.length} Professional Instructors
        </h3>
      </Zoom>

      {/* Instructors Card */}
      <div className="flex flex-wrap gap-5 justify-evenly my-10">
  {instructors.map((ins) => (
    <motion.div
      key={ins._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="card w-96 glass relative">
        <figure>
          <img
            className="hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all"
            src={ins.photoURL}
            alt="Classes"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title">{ins.name}</h2>
          <p>{ins.email}</p>
        </div>
        <div className="grid content-end ">
                    <Link to="/allclasses"
                     
                      className="btn-custom"
                      
                    >
                      See Classes
                    </Link>
                  </div>
      </div>
    </motion.div>
  ))}
</div>
    </div>
  );
};

export default AllInstructors;
