import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';

function ModalDeleteUser(props) {
    const { show, handleClose, dataUserDelete, handleDeleteUserModal } = props;

    const handleDeleteUser = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204) {
            handleClose();
            handleDeleteUserModal(dataUserDelete);
            toast.success('Delete User successfully!');
        } else {
            toast.error('Something wrong!');
        }
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop={'static'} keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete a User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-delete-user'>
                    This action can't be undone!<br></br>
                    Are you sure to delete this user with <strong>email = {dataUserDelete.email}</strong>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleDeleteUser()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteUser;