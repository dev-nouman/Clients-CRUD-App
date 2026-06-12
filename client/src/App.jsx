import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import ModalForm from './components/ModalForm'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleIsOpen = (mode) => {
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
      <Navbar />
      <Tablelist />
      <ModalForm />
    </>
  )
}

export default App
