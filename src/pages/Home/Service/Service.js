import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';
import useAuth from '../../../Hooks/useAuth';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
const Service = ({service}) => {
  const { isLoading } = useAuth();
    const { name, photoUrl,price,provider } = service?.data;
    const {description} = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
      <div>
            {isLoading && <Box pt={0.5}>
            <Skeleton variant="rect" width={210} height={118} />
              <Skeleton width="100%" />
            </Box>}
      <div class="col">
      <div class="card border-0">
          <img src={photoUrl} alt={name}></img>
        <div class="card-body">
          <h3 class="card-title"><b>{name}</b></h3>
          <p><small>by</small> {provider}</p>
          <h5>BDT {price}</h5>
          <p>{description.slice(0, 80)}...</p>
        </div>
        <div class="m-3">
            <button onClick={() => handleBooking(service._id)} class="button-orange">Buy Now <i class="fa-solid fa-cart-plus ico"></i></button>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Service;