import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const AllUser = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex flex-col justify-center items-center my-auto">
           <div>
           <h1 className="text-4xl font-bold">Welcome Back <span className="text-cyan-500">{user?.displayName}</span></h1>
           {/* <h2>You are {user.role}</h2> */}
            <p className="text-xl font-medium">Explore Your Dashboard</p>
           </div>
        </div>
    );
};

export default AllUser;