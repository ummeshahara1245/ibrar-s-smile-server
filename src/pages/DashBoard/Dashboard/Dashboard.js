import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import SideBar from '../SideBar/SideBar';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
const Dashboard = () => {
    const {admin,user} = useAuth();

    return (
            <div className='d-flex'>
                <SideBar></SideBar>
                <div><h1>Hi! {user.displayName} { admin && <AdminPanelSettingsIcon className='text-green-600'/>} Welcome to you dashboard.</h1></div>
                
            </div>
    );
};

export default Dashboard;