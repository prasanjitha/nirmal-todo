import React, { useState } from 'react'

import CustomModel from './CustomModel';
import Button from '../ui-elements/Button/Button';

const AddTodoButton = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={openModal}>Add New</Button>
            <CustomModel isOpen={isModalOpen} closeModal={closeModal} />
        </React.Fragment>
    )
}

export default AddTodoButton;