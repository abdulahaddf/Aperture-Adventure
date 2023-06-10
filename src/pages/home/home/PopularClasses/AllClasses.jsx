import { Helmet } from "react-helmet-async";
import UseClasses from "../../../../hooks/Useclasses";
import { Zoom } from "react-awesome-reveal";

const AllClasses = () => {
  const [classes] = UseClasses();
  console.log(classes);
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
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto">
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
                <h2 className="card-title">{cls.className}</h2>
                <p>
                  {cls.description}
                </p>
                <p>Instractor :{cls.instructorName}</p>
                <p>Price: {cls.price}</p>

                <div className="card-actions justify-end">
                  <button className="btn-custom">Book Now!</button>
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
