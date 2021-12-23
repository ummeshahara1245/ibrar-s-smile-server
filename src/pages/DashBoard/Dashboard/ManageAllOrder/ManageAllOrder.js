import React from 'react';
const ManageAllOrder = ({service,handleUpdateStatus 
}) => {
    const {user,date,status,_id } = service;
    const {phone} = service.data;

    return (
          <tr className="mt-2 border border-black text-center hover:bg-blue-50 transition duration-300 ease-in-out">
            <td className="px-3"> {user}</td>
            <td className="px-3"> {date.slice(0,10)}</td>
            <td className="px-3"> {phone}</td>

            <td className="robotoFont fw-lighter text-start">
            <td>  
                  
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          {status}
          </button>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button onClick={() => handleUpdateStatus(_id, "Pending")} class="dropdown-item">Pending</button></li>
            <li><button onClick={() => handleUpdateStatus(_id, "Approved")} class="dropdown-item">Approved</button></li>
            <li><button onClick={() => handleUpdateStatus(_id, "Shipped")} class="dropdown-item">Shipped</button></li>
          </ul>
        </div>
            </td>
            </td>
        </tr>
        
    )
};

export default ManageAllOrder;