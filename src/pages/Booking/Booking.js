import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';
import './Booking.css'
import { Alert, Snackbar } from '@mui/material';
const Booking = ({ service }) => {
    const history = useHistory();
    const { user } = useAuth();
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const date = new Date();
    const status = 'Pending';

    const onSubmit = data => {
        fetch('https://fast-earth-57411.herokuapp.com/services/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data, date, user: user.email, service, status, })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    reset();
                    history.push('/orderPlace')
                }
            })
    };
    return (
        <div>
            <div className="mb-5 mt-5">
                <form className="flex flex-col w-80 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user?.displayName} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded " {...register("name", { required: true })} placeholder="Name" />
                    <input defaultValue={user?.email} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded " {...register("duration", { required: true })} placeholder="Email" />
                    <input defaultValue={user?.phone} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded " type="photo" {...register("phone", { required: true })} placeholder="Phone" />
                    <input defaultValue={user?.address} className="border-2 border-gray-300 m-2 px-3 hover:border-red-600 py-2 rounded" {...register("address", { required: true })} placeholder="Address" />
                    <button onClick={handleClick} type="submit" class="button-green">Buy Now <i class="fa-solid fa-cart-shopping ico"></i></button>
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

export default Booking;