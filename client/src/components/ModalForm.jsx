import React, { useState } from 'react'

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {

    const [rate, setRate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [status, setStatus] = useState(false)

    // Handle the state of status
    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'active') // set status as boolean
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setJob('')
        setRate('')
        setStatus(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email, job, rate: parseFloat(rate), status }
        onSubmit(formData)
        clearForm()
        onClose()
    }


    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box flex flex-col">
                    <h3 className="font-bold text-lg py-4">
                        {mode === 'edit' ? "Edit Client" : "Client Details"}
                    </h3>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                        <label className='input input-bordered flex items-center gap-2 w-full'>
                            Name
                            <input type="text" className='grow' value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label className='input input-bordered flex items-center gap-2 w-full'>
                            Email
                            <input type="email" className='grow' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label className='input input-bordered flex items-center gap-2 w-full'>
                            Job
                            <input type="text" className='grow' value={job} onChange={(e) => setJob(e.target.value)} />
                        </label>

                        <div className='flex gap-2 mb-4 justify-between'>
                            <label className='input input-bordered flex items-center gap-2'>
                                Rate
                                <input type="number" className='grow' value={rate} onChange={(e) => setRate(e.target.value)} />
                            </label>
                            <select value={status ? 'active' : 'inactive'} className='select select-bordered w-full max-w-xs' onChange={handleStatusChange}>
                                <option value="inactive">InActive</option>
                                <option value="active">Active</option>
                            </select>
                        </div>



                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={onClose}
                        >
                            ✕
                        </button>

                        <button
                            type="submit"
                            className='btn btn-success'
                        >
                            {mode === 'edit' ? "Save Changes" : "Add Client"}
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default ModalForm