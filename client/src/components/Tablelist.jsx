import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tablelist = ({ handleOpen, searchTerm, tableData, setTableData }) => {

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

    const handleDelete = async (clientId) => {
        try {
            await axios.delete(`http://localhost:3000/api/clients/${clientId}`);
            setTableData(tableData.filter(client => client.id !== clientId));
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    }

    const filteredData = tableData.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

                        {filteredData.map((client) => (
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
                                <td><button className='btn btn-secondary w-15' onClick={() => handleOpen('edit', client)}>Update</button></td>
                                <td><button className='btn btn-accent w-15' onClick={() => handleDelete(client.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tablelist
