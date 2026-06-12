import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import ModalForm from './components/ModalForm'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <Tablelist handleOpen={handleOpen} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} />
    </>
  )
}

export default App