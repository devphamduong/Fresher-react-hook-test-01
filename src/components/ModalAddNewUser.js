import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { createUser } from '../services/UserService';

function ModalAddNewUser(props) {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState();
    const [job, setJob] = useState();

    const handleAddUser = async () => {
        let res = await createUser(name, job);
        if (res && res.id) {
            setName('');
            setJob('');
            toast.success('Added User successfully!');
            handleUpdateTable({ first_name: name, id: res.id });
            handleClose();
        } else {
            toast.error('Something wrong!');
        }
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