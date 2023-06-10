import UseClasses from "../../../../hooks/Useclasses";

const PopularClasses = () => {
  const [classes] = UseClasses();
  
  const popularClasses = classes.filter((classItem) => classItem.category == "popular");

  return (
    <div className="pt-10 w-11/12 mx-auto">
      <div className="bg-cyan-600 w-11/12 h-48 absolute">
        <h1 className="text-5xl font-bold text-center text-white">
          Most Popular Classes
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto mt-28">
        {popularClasses.map((cls) => (
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
                <h2 className="card-title text-xl font-bold">{cls.className}</h2>
                <p>
                  {cls.description}
                </p>
                <p><span className="font-semibold">Instructor:</span>{cls.instructorName}</p>
                <p><span className="font-semibold">Price: $</span>{cls.price}</p>

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

export default PopularClasses;
