import React from 'react'

const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
    return (
        <dialog className="modal" open={isOpen}>
            <div className="modal-box">

                <button
                    type="button"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h3 className="font-bold text-lg py-4">
                    {mode === 'edit' ? "Edit Client" : "Client Details"}
                </h3>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={onSubmit}
                >
                    {mode === 'edit'
                        ? "Save Changes"
                        : "Add Client"}
                </button>

            </div>
        </dialog>
    )
}

export default ModalForm