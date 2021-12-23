import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';

const OrderReview = () => {    
    const [service, setService] = useState();
    const { id } = useParams();
      useEffect(() => {
          const url = `https://fast-earth-57411.herokuapp.com/services/${id}`
          fetch(url)
              .then(res => res.json())
              .then(data => setService(data))
      }, [])
      
    return (
        <>
        <div className="container mt-5 mb-5">
                <h4 className="text-center mb-4">You are going to <span className="text-green-600">Order</span> this service!!!</h4>
            <div className="d-lg-flex justify-between items-center">
                <div className="">
                    <img className="rounded " style={{width:'300px',height:'300px'}} src={service?.data.photoUrl} alt="" />
                    <div className='d-flex gap-5'>
                    <h4>{service?.data.name} </h4>
                    <h6> BDT {service?.data.price}</h6>
                    </div>
                    <h5>Description: {service?.data.description}</h5>
                </div>
                <div>
                    <Booking service={service} />
                </div>
            </div>
        </div>
        </>
    )
}

export default OrderReview;