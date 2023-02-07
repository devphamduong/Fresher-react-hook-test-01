import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { createUser } from '../services/UserService';

function ModalUpdateUser(props) {
    const { show, handleClose, dataUser, handleUpdateTable } = props;
    const [name, setName] = useState();
    const [job, setJob] = useState();

    const handleEditUser = async () => {
        // let res = await createUser(name, job);
        // if (res && res.id) {
        //     setName('');
        //     setJob('');
        //     toast.success('Added User successfully!');
        //     handleUpdateTable({ id: res.id, first_name: name });
        //     handleClose();
        // } else {
        //     toast.error('Something wrong!');
        // }
    };

    useEffect(() => {
        if (show) {
            setName(dataUser.first_name);
        }
    }, [dataUser]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit a User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-edit-user'>
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
                <Button variant="primary" onClick={() => handleEditUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalUpdateUser;