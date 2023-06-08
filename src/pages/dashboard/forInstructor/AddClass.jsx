import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";

const AddClass = () => {
    const {user} = useContext(AuthContext)
   
  const { register, handleSubmit } = useForm();

  const handleAddClass = (data) => {
    console.log(data);
  };

  return (
    <>
    <h1 className="text-5xl font-bold text-center text-cyan-600 my-10">Add a Photography Class As an Instructor</h1>
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
            <label className="block mb-2 text-xl font-semibold">Image URL:</label>
            <input type="url" name="image" className="input input-bordered input-info w-full max-w-xs" {...register('image')} />
          </div>
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Available Seat:</label>
            <input type="number" name="availableSeat" className="input input-bordered input-info w-full max-w-xs" {...register('availableSeat')} />
          </div>
  
          <div className="mb-4">
            <label className="block mb-2 text-xl font-semibold">Price:</label>
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
