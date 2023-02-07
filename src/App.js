import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import ModalAddNewUser from './components/ModalAddNewUser';
import TableUsers from './components/TableUsers';

function App() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const handleCloseModalCreate = () => {
    setShowModalCreate(false);
  };
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const handleCloseModalUpdate = () => {
    setShowModalUpdate(false);
  };
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };

  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className='my-3 add-new'>
          <span><strong>List Users:</strong></span>
          <button className='btn btn-info' onClick={() => setShowModalCreate(true)}>Add new User</button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNewUser show={showModalCreate} handleClose={handleCloseModalCreate} />
    </div>
  );
}

export default App;
