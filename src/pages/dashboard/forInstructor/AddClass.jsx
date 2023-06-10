import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/UseAxiousSecure";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";


const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const {user} = useContext(AuthContext)
   
  const { register, handleSubmit,reset } = useForm();

  const handleAddClass = data => {
        
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {className, description,category,price,availableSeat,instructorEmail,instructorName } = data;
            const newItem = {className, price: parseFloat(price), category, description, image : imgURL, availableSeat, instructorName, instructorEmail}
            console.log(newItem)
            axiosSecure.post('/class', newItem)
            .then(data => {
                console.log('after posting a new class', data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
          toast('Server Problem! try again later')
        }
    })
    .catch(err => {
      toast('Something went wrong! ')
      console.log(err)})

};

  return (
    <>
     <Helmet>
                <title>Aperture Adventure | Add Class</title>
            </Helmet>
    <Zoom><h1 className="text-5xl font-bold text-center text-cyan-600 my-10">Add a Photography Class As an Instructor</h1></Zoom>
    <div className="container mx-auto p-4 ">
        
        <form onSubmit={handleSubmit(handleAddClass)}>
          <div className="grid md:grid-cols-2 ">
          <div className="mb-4">
            <label className="block mb-2  text-xl font-semibold">Class Name:</label>
            <input  type="text" name="className" className=" input input-bordered input-info w-full max-w-xs" {...register('className')} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Class Description:</label>
            
            <textarea name="description"  className="textarea textarea-info w-full max-w-xs" {...register('description')}></textarea>
          </div>
  
         
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Instructor Name:</label>
            <input type="text" name="instructorName" value={user.displayName} className="input input-bordered input-info w-full max-w-xs" {...register('instructorName')} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Instructor Email:</label>
            <input type="text" name="instructorEmail" value={user.email} className="input input-bordered input-info w-full max-w-xs" {...register('instructorEmail')} />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Choose an Image</label>
            <input type="file" name="image" className="file-input file-input-info file-input-bordered w-full max-w-xs" {...register('image')} />
          </div>
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Available Seat:</label>
            <input type="number" name="availableSeat" className="input input-bordered input-info w-full max-w-xs" {...register('availableSeat')} />
          </div>
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Price $:</label>
            <input type="number" name="price" className="input input-bordered input-info w-full max-w-xs" {...register('price')} />
          </div>
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Category:</label>
            <select name="category" className="input input-bordered input-info w-full max-w-xs" {...register('category')}>
              <option value="popular">Popular</option>
              <option value="normal">Normal</option>
            </select>
          </div>
          
          </div>
  
          <div className="text-center md:mr-48 md:mt-10">
          <button type="submit" className="btn-custom">
            Add Class
          </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
