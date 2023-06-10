import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../hooks/UseAdmin";
import useInstructor from "../../../hooks/UseInstructor";
import { Helmet } from "react-helmet-async";


const AllUser = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="flex flex-col justify-center items-center my-auto ">
             <Helmet>
                <title>Aperture Adventure | Welcome</title>
            </Helmet>
           <div>
           <h1 className="text-4xl font-bold">Welcome <span className="text-cyan-500">{user?.displayName}</span></h1>
          <h2 className="text-2xl my-4">
            You are Logged In as {isAdmin ? 'an Admin' : isInstructor ? 'an Instructor' : 'a Student'}
          </h2>
            <p className="text-xl font-medium">Explore Your Dashboard</p>
           </div>
        </div>
    );
};

export default AllUser;