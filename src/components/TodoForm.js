import React, { useState } from 'react';

import MyLoader from './ClipLoader';
import classes from './TodoForm.module.css';
import { useTodoContext } from '../store/TodoContext';

const TodoForm = ({ cancelModel }) => {

    const [didSubmit, setDidSubmit] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [enteredTitleTouch, setEnteredTitleTouch] = useState(false);

    const { addTodo } = useTodoContext();


    const enteredTitleIsValid = enteredTitle.trim() !== '';
    const titleInputIsInvalid = !enteredTitleIsValid && enteredTitleTouch;

    const titleInputChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };

    const nameIputBlurHandler = () => {
        setEnteredTitleTouch(true);
    }

    const formSubmissionHandler = async (event) => {
        event.preventDefault();

        setEnteredTitleTouch(true);

        if (!enteredTitleIsValid) {
            return;
        }

        try {

            setIsSubmitting(true);
            const data = {
                id: Date.now(),
                title: enteredTitle,
                completed: false,
            };
            await addTodo(data);

            setIsSubmitting(false);
            setDidSubmit(true);

            setEnteredTitle('');
            setEnteredTitleTouch(false);

        } catch (error) {

            console.log('Somthing went wrong!', error);

        }


    }
    const formContent = <React.Fragment>
        <form onSubmit={formSubmissionHandler}>
            <div className={classes.mainText}>Add New Item</div>
            <div className={classes.formGroup}>
                <label className={classes.title} htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    className={classes.input}
                    value={enteredTitle}
                    onBlur={nameIputBlurHandler}
                    onChange={titleInputChangeHandler}
                />
            </div>
            {titleInputIsInvalid && <p className={classes.errorText}>Title must not be empty.</p>}
            <div>
                <div className='form-action'>
                    <button className={classes.formConfirmbtn}>CONFIRM</button>
                </div>
            </div>
        </form>
        <button className={classes.formCancelBtn} onClick={cancelModel}>CANCEL</button>
    </React.Fragment>

    const isSubmitingFormContent = <p className={classes.success}>Sending title data...</p>;

    const didSubmitFormContent = <React.Fragment>

        <p className={classes.success}>Successfully sent the data!</p>
        <button className={classes.cancelbtn} onClick={cancelModel}>CANCEL</button>

    </React.Fragment>

    return (
        <React.Fragment>
            {!isSubmitting && !didSubmit && formContent}
            {isSubmitting && isSubmitingFormContent}
            {isSubmitting && <MyLoader loadigStatus={isSubmitting} />}
            {!isSubmitting && didSubmit && didSubmitFormContent}
        </React.Fragment>
    )
}

export default TodoForm;