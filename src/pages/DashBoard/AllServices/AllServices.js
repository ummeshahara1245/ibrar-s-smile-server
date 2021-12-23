import React, {useState, useEffect} from 'react';
import ServiceTable from '../ServiceTable/ServiceTable';
import SideBar from '../SideBar/SideBar'

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fast-earth-57411.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleDeleteService = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://fast-earth-57411.herokuapp.com/services/${id}`;
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

        fetch(`https://fast-earth-57411.herokuapp.com/services/${id}`, {
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
                            <th className="px-3 ">Product Name</th>
                            <th className="px-3 ">Product Price</th>
                            <th className="px-3 ">Admin</th>
                            <th className="px-3 ">Delete</th>
                            <th className="px-3 ">Edit</th>                                         
                        </tr>
                            {
                                services.map(service => <ServiceTable key={service._id} service={service} handleDeleteService={handleDeleteService} handleUpdateStatus={handleUpdateStatus}/>
                                    )
                            }
                    </tbody>
                </thead>
            </table>
        </div>
        </div>
        
    )
};

export default AllServices;