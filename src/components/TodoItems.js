import React from 'react';

import classes from './TodoItems.module.css';
import DeleteButton from '../UI/DeleteButton/DeleteButton';
import RoundedCheckbox from '../UI/CheckBox/RoundedCheckBox';

const TodoItems = ({ title, id, completed }) => {

    const container = completed ? `${classes.completeCon}` : `${classes.container}`;

    return (
        <div className={container}>

            <RoundedCheckbox
                completed={completed}
                titleId={id}
                title={title}
            />

            <p className={classes.title}>{title}</p>

            <div className={classes.deleteBtn}>
                <DeleteButton
                    titleId={id}
                    completed={completed}
                />
            </div>

        </div>
    )
}

export default TodoItems;