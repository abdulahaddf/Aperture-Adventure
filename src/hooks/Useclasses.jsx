import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiousSecure";


const UseClasses = () => {
    //get the classes by email
    const [axiosSecure] = useAxiosSecure();
    const {
      data: classes = [],
      isLoading: loading,
      refetch,
    } = useQuery(["class"], async () => {
      const res = await axiosSecure.get("/class");
      return res.data;
    });
  
    return [classes, loading, refetch];
};

export default UseClasses;