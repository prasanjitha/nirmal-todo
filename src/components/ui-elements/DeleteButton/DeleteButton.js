import React from 'react';

import classes from './DeleteButton.module.css';

const DeleteButton = ({ completed, onDeleted }) => {

    const deleteBtn = completed ? `${classes.completeBtn}` : `${classes.deleteBtn}`

    return (
        <>
            <button
                className={deleteBtn}
                onClick={onDeleted}
            >
                <img
                    src={require('../../../images/icons8-delete-96.png')}
                    height={45}
                />
            </button>

        </>
    );
};

export default DeleteButton;

