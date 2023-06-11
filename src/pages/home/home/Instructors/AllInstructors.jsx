import { Helmet } from "react-helmet-async";
import UseUsers from "../../../../hooks/UseUsers";
import { Zoom } from "react-awesome-reveal";


const AllInstructors = () => {
  const [users] = UseUsers();
  const instructors = users.filter(
    (instructor) => instructor.role == "instructor"
  );
  console.log(instructors);
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
      <div className="flex flex-wrap  gap-5 justify-evenly my-10">
        {instructors.map((ins) => (
          <div key={ins._id}>
            <div className="card w-96 glass relative">
              <figure>
                <img
                  className="h-96 hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all"
                  src={ins.photoURL}
                  alt="Classes"
                />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title">{ins.name}</h2>
                <p>{ins.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
