import UseUsers from "../../../../hooks/UseUsers";

const PopularInstractors = () => {
  const [users] = UseUsers();
  const instructors = users.filter(
    (instructor) => instructor.role == "instructor"
  );

  return (
    <div className="pt-10 w-11/12 my-32 mx-auto">
      <div className="bg-cyan-600 w-11/12 h-48 absolute">
        <h1 className="text-5xl font-bold text-center text-white">
          Most Popular Instructors
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto mt-28">
        {instructors.slice(0,6).map((ins) => (
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

export default PopularInstractors;
