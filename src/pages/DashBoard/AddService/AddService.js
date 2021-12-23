import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import SideBar from '../SideBar/SideBar';
import {Alert} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
const AddService = () => {
    const [open, setOpen] = React.useState(false);
    const [success,setSuccess] = useState(false);
     const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    const onSubmit = data => {
        fetch('https://fast-earth-57411.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, admin: user.email})
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
              reset()
               setSuccess(true)
            }
        })
    };

    return (
        <div className="sm:flex block">
       <div className="w-60">
                <SideBar />
            </div>
            <div className=" mx-auto mt-4 text-center">
                <h1 className="text-green-500">Add Product</h1>
                <form className="flex flex-col w-100" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("name", {required: true})} placeholder="Service Name"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("provider", {required: true})} placeholder="Provider"/>
                    <textarea className="border-2 border-gray-300 m-2 px-2 rounded" {...register("description", {required: true})} placeholder="Service description"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("photoUrl", {required: true})} placeholder="Photo Url"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" type="number" {...register("price", {required: true})} placeholder="Service Price"/>
                    <button onClick={handleClick} className='button-green' type="submit" value="Add Product">Add</button>
                </form>
                {success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product Added Succesfully!
        </Alert>
      </Snackbar>}
            </div>
        </div>
    );
};

export default AddService;