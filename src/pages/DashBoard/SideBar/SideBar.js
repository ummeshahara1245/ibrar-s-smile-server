import React from 'react';
import { Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import useAuth from '../../../Hooks/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentIcon from '@mui/icons-material/Payment';
import {Button } from '@mui/material';
import { Box } from '@mui/system';
const SideBar = () => {
  const {admin} = useAuth();
  const { logout } = useAuth();
  return (
    <div className='d-flex bg-gray-100'>
      
      <div className="bg-gray-100">
        <Link to="/" className="text-white no-underline font-semibold">
        <Button>
        <HomeIcon/>  
         Home</Button>
        </Link>
      <br />
      <div className="lg:h-screen">
        { admin && 
          <Box>
            
        <li className="list-none">
        <Link to="/addService" className="text-white no-underline font-semibold"><Button ><AddShoppingCartIcon/>Add product</Button></Link><br />
        </li>
        <li className="list-none ">
          <Link className="text-white no-underline font-semibold" to="/manageProduct"><Button ><EventAvailableIcon/>Manage Products</Button></Link><br />
        </li>
        <li className="list-none text-white">
          <Link className="text-white no-underline font-semibold" to='/manageAllOrder'><Button><i class="fa-solid fa-arrow-up-short-wide"></i> Manage Order</Button></Link>
        </li>
        <li className="list-none text-white">
        <Link className="text-white no-underline font-semibold" to="/makeAdmin"><Button><AdminPanelSettingsIcon/>Make Admin</Button></Link>
        </li>
          </Box>
          }
        
      
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/myOrders'><Button><CardGiftcardIcon/>My Orders</Button></Link>
        </li>
        
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/pay'><Button><PaymentIcon/>Pay</Button></Link>
        </li>
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/addReview'><Button><RateReviewIcon/>Review</Button></Link>
        </li>
        
        <br />
        <Button onClick={logout}><LogoutIcon/>Log Out</Button>
      </div>
      
    </div>
    
    </div>
  );
};

export default SideBar;