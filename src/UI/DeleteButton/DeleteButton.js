import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import classes from './DeleteButton.module.css';
import { useTodoContext } from '../../store/TodoContext';

const DeleteButton = ({ titleId, completed }) => {

    const { deleteMyTodo } = useTodoContext();

    const deleteBtn = completed ? `${classes.completeBtn}` : `${classes.deleteBtn}`

    return (
        <>

            <button
                className={deleteBtn}
                onClick={() => deleteMyTodo(titleId)}
            >
                <img
                    src={require('../../images/icons8-delete-96.png')}
                    height={45}
                />
            </button>

        </>
    );
};

export default DeleteButton;

