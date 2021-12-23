import React, {useState, useEffect} from 'react';
import ManageAllOrder from '../Dashboard/ManageAllOrder/ManageAllOrder';
import SideBar from '../SideBar/SideBar';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fast-earth-57411.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleDeleteService = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://fast-earth-57411.herokuapp.com/bookings/${id}`;
            fetch(url, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remainingServices = services.filter(service => service._id !==id);
                        setServices(remainingServices);
                    }
                })
        }
    }
    const handleUpdateStatus = (id, value) => {
        const status = [value];

        fetch(`https://fast-earth-57411.herokuapp.com/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Request Approved');
                  
                }
            });
    }

    return (
        <div className='d-flex'>
            <SideBar/>
            <div className="mt-5 ml-2">
            <table>
                <thead>
                    <tbody>
                        <tr className="bg-blue-500 text-white text-center">
                            <th className="px-3 ">User</th>
                            <th className="px-3 ">Date</th>
                            <th className="px-3 ">Phone</th>                         
                            <th className="px-3 ">Status</th>                         
                        </tr>
                            {
                                services.map(service => <ManageAllOrder key={service._id} service={service} handleDeleteService={handleDeleteService} handleUpdateStatus={handleUpdateStatus}/>
                                    )
                            }
                    </tbody>
                </thead>
            </table>
        </div>
        </div>
    )
};

export default ManageAllOrders;