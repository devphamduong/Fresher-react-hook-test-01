import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { updateUser } from '../services/UserService';

function ModalUpdateUser(props) {
    const { show, handleClose, dataUserUpdate, handleUpdateUserModal } = props;
    const [name, setName] = useState();
    const [job, setJob] = useState();

    const handleEditUser = async () => {
        let res = await updateUser(dataUserUpdate, name, job);
        if (res && res.updatedAt) {
            handleUpdateUserModal({
                id: dataUserUpdate.id,
                first_name: name
            });
            handleClose();
            toast.success('Update User successfully!');
        } else {
            toast.error('Something wrong!');
        }
    };

    useEffect(() => {
        if (show) {
            setName(dataUserUpdate.first_name);
        }
    }, [dataUserUpdate]);

    return (
        <Modal show={show} onHide={handleClose} backdrop={'static'} keyboard={false}>
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