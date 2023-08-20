import React from 'react';
import Modal from 'react-modal';

import TodoForm from './TodoForm';
import classes from './CustomModel.module.css'

Modal.setAppElement('#root');

const CustomModel = ({ isOpen, closeModal }) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={classes.content}
            overlayClassName={classes.overlay}

        >
            <TodoForm cancelModel={closeModal} />
        </Modal>
    )
}

export default CustomModel;