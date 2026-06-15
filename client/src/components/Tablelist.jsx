import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tablelist = ({ handleOpen }) => {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clients');
                setTableData(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {error && <div className="alert alert-error">{error}</div>}
            
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="hover:bg-base-300">

                        {/* MAP ROWS */}

                        {tableData.map((client) => (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>
                                    <button className={`btn rounded-full w-25 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                        {client.isactive ? `Active` : `InActive`}
                                    </button>
                                </td>
                                <td><button className='btn btn-secondary w-15' onClick={() => handleOpen('edit')}>Update</button></td>
                                <td><button className='btn btn-accent w-15'>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tablelist
