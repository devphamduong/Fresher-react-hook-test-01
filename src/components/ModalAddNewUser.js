import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalAddNewUser(props) {
    const { show, handleClose } = props;
    const [name, setName] = useState();
    const [job, setJob] = useState();

    const handleAddUser = async () => {
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-add-user'>
                    <div className='form-group'>
                        <div className='mb-3'>
                            <label className='form-label'>Name</label>
                            <input type={'text'} className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Job</label>
                            <input type={'text'} className='form-control' value={job} onChange={(event) => setJob(event.target.value)} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleAddUser()}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAddNewUser;