import React, { useContext, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import classes from './TodoHome.module.css';
import { ToastContainer } from 'react-toastify';
import AddTodoButton from '../components/form/AddTodoButton';
import Card from '../components/ui-elements/common/Card/Card';
import MyLoader from '../components/ui-elements/common/ClipLoader';
import { LoopItms } from '../components/ui-elements/common/CoreElements';
import DeleteButton from '../components/ui-elements/DeleteButton/DeleteButton';
import RoundedCheckbox from '../components/ui-elements/CheckBox/RoundedCheckBox';
import { UIContext } from '../components/global-context/context-providers/UIContext.provider';
import { TodoContexts } from '../components/global-context/context-providers/TodoContext.provider';


const TodoHome = () => {

    const [uiStatus] = useContext(UIContext);
    const [state, todoAction] = useContext(TodoContexts);

    useEffect(() => {
        todoAction.requestData();
    }, []);

    useEffect(() => {
        todoAction.requestData();
    }, [state.refreshStatus]);


    const todoList =
        <LoopItms
            items={state.todoList}
            renderIFEmpty={(<div>empty todolist </div>)}
            renderItem={(item, index) => {
                const container = item.completed ? `${classes.completeCon}` : `${classes.rowcontainer}`;
                return (
                    <li key={index} className={container}>
                        <RoundedCheckbox
                            completed={item.completed}
                            titleId={item._uuid}
                            title={item.title}
                        />
                        {item.title}
                        <DeleteButton completed={item.completed} onDeleted={() => todoAction.removeTodoItem(item._uuid)} />
                    </li>
                )
            }}
        />

    return (
        <Card className={classes.container}>
            <div className={classes.header}>
                <h1>Todo List</h1>
                <AddTodoButton />
            </div>
            <div className={classes.todobody}>
                <ToastContainer />
                {uiStatus.isload ? <div className={classes.loader}><MyLoader loadigStatus={uiStatus.isload} /></div> : todoList}
            </div>

        </Card>
    )
}

export default TodoHome;