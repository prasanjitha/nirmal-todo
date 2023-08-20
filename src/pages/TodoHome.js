import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Card from '../UI/Card/Card';
import classes from './TodoHome.module.css';
import TodoContext from '../store/TodoContext';
import TodoItems from '../components/TodoItems';
import MyLoader from '../components/ClipLoader';
import { ToastContainer } from 'react-toastify';
import AddTodoButton from '../components/AddTodoButton';


const TodoHome = () => {

    const todoCtx = useContext(TodoContext);

    if (todoCtx.httpError) {
        return (
            <section>
                <p>{todoCtx.httpError}</p>
            </section>
        )
    }

    const todoList = todoCtx.todos.map((todo) => (
        <TodoItems
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
        />

    ));

    return (
        <Card className={classes.container}>
            <div className={classes.header}>
                <h1>Todo List</h1>
                <AddTodoButton />
            </div>
            <div className={classes.todobody}>
                <ToastContainer />
                {todoCtx.isLoading ? <MyLoader loadigStatus={todoCtx.isLoading} /> : todoList}
            </div>

        </Card>
    )
}

export default TodoHome;