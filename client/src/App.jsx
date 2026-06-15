import axios from 'axios'
import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'
import ModalForm from './components/ModalForm'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleOpen = (mode, client = null) => {
    setModalMode(mode);
    if (client) setClientData(client);
    setIsOpen(true);
  }

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log('Client added:', response.data);
        setTableData((prevData) => [...prevData, response.data]);

      } catch (error) {
        console.error('Error adding client:', error); // Log error
      }
      console.log('modal mode Add');

    } else {
      console.log('Updating client with ID:', clientData.id);
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
        console.log('Client updated:', response.data);
        setTableData((prevData) =>
          prevData.map((client) => (client.id === clientData.id ? response.data : client))
        );
      } catch (error) {
        console.error('Error updating client:', error);
      }

    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
      <Tablelist handleOpen={handleOpen} searchTerm={searchTerm} tableData={tableData} setTableData={setTableData} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} mode={modalMode} clientData={clientData} />
    </>
  )
}

export default App