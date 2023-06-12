import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiousSecure";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";


const UseClasses = () => {
  // const {user,} = useContext(AuthContext);
    //get the classes by email
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem("access-token");
    const {
      data: classes = [],
      isLoading: loading,
      refetch,
    } = useQuery(["class"], async () => {
      // enabled :!loading && !!user?.email && !! token,
      const res = await axiosSecure.get("/class");
      return res.data;
    });
  
    return [classes, loading, refetch];
};

export default UseClasses;