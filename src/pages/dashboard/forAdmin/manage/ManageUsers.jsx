import { Helmet } from "react-helmet-async";
import UseUsers from "../../../../hooks/UseUsers";
import Swal from "sweetalert2";





const ManageUsers = () => {
    const [users,refetch] = UseUsers();
   


//make admin
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){  
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    //make instructor
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
   
   
  
    return (
        <div className="w-full">
            <Helmet>
                <title>Aperture Adventure | Manage Users</title>
            </Helmet>
            <h3 className="text-5xl text-center font-semibold my-10 text-cyan-600">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra shadow-xl w-full">
                    {/* head */}
                    <thead className="bg-cyan-600 text-white">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-16 rounded-full" src={user.photoURL} alt="" /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'Student'}</td>
                                <td>
                                <button className="btn btn-custom-sm" onClick={() => handleMakeAdmin(user)}  disabled={user.role === 'admin'}> Make Admin</button>

                                    <button className="btn btn-custom-sm" onClick={() => handleMakeInstructor(user)} disabled={user.role === 'instructor'}>Make Instructor</button>
                                
                                
                                </td>





                                {/* <td>{ user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}


                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;