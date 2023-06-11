import { Zoom } from "react-awesome-reveal";
import UseUsers from "../../../../hooks/UseUsers";
import Loader from "../../../../shared/components/Loader";
import LazyLoad from "react-lazyload";

const PopularInstractors = () => {
  const [users,loading] = UseUsers();
  const instructors = users.filter(
    (instructor) => instructor.role == "instructor"
  );
if(loading){
  return <Loader></Loader>
}
  return (
    
    <div className="pt-10 w-11/12 my-32 mx-auto">
      <div className="bg-cyan-600 w-11/12 h-48 absolute">
       <Zoom> <h1 className="heading">
          Most Popular Instructors
        </h1>
        <p className="font-medium text-center mt-1 text-white">
            Here you can see some of our Professional Photographers
          </p>
        </Zoom>
        </div>
       
     
      <div className="flex flex-wrap gap-5 mt-23 justify-evenly mt-28">
        {instructors.slice(0,6).map((ins) => (
          <div key={ins._id}>
           
         
       <div className="card w-96 glass relative">
              <LazyLoad>
                <figure>

                <img
                  className="h-96 rounded-xl hover:scale-125 hover:-translate-y-1 hover:duration-400 transition-all"
                  src={ins.photoURL}
                  alt="Classes"
                />
                </figure>
              </LazyLoad>
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

export default PopularInstractors;
