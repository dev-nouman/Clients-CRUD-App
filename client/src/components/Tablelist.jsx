import React from 'react'

const Tablelist = ({ handleOpen }) => {

    const clients = [
        { id: 1, name: "John Doe", email: "johndoe@gmail.com", job: "developer", rate: "100", isActive: true },
        { id: 2, name: "John1 Doe", email: "johndoe1@gmail.com", job: "developer", rate: "101", isActive: true },
        { id: 3, name: "John2 Doe", email: "johndoe2@gmail.com", job: "developer", rate: "102", isActive: false }
    ]

    return (
        <>
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

                        {clients.map((client) => (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>
                                    <button className={`btn rounded-full w-25 ${client.isActive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                        {client.isActive ? `Active` : `InActive`}
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
