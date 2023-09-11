import { toast } from 'react-toastify';

import { httpRequset } from "../../../helpers/http-wrapper.helper";
import { errorStyle, successStyle } from '../../../configs/toast-config';
import { editTodoListAPI, getTodoListAPI } from "../../../configs/api-end-points";
import { refreshTodoDataKey, requestTodoDataKey } from "../../../configs/action-keys";

/**
 * @param {*} dispatch 
 */

const requestData = async (dispatch, uiActions) => {
    try {

        uiActions.setPageLoader(true);
        const data = await httpRequset(getTodoListAPI);
        toast("Loading data success!");
        uiActions.setPageLoader(false);

        dispatch({
            type: requestTodoDataKey,
            payload: data.items
        });

    } catch (ex) {

        uiActions.setPageLoader(false);
        console.log("Ex:- ", ex);

        dispatch({
            type: requestTodoDataKey,
            payload: []
        });

    }
}

/**
 * 
 * @param {*} dispatch 
 * @param {*} body 
 */

const addTodoItem = async (dispatch, body, uiActions) => {
    try {
        uiActions.setPageLoader(true);
        const data = await httpRequset(getTodoListAPI, "POST", body);
        toast.success('Todo added successfully!', successStyle);
        uiActions.setPageLoader(false);
        dispatch({
            type: refreshTodoDataKey,
        });
    } catch (ex) {
        uiActions.setPageLoader(false);
        console.log("Ex:- ", ex)
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} body 
 * @param {*} dispatch 
 */

const editTodoItem = async (dispatch, id, body, uiActions) => {

    try {

        uiActions.setPageLoader(true);
        const data = await httpRequset(`${editTodoListAPI}/${id}`, "PUT", body);
        toast.success('Todo status updated successfully!', successStyle);
        uiActions.setPageLoader(false);

        dispatch({
            type: refreshTodoDataKey,
        });

    } catch (ex) {

        uiActions.setPageLoader(false);
        console.log("Ex:- ", ex)
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} dispatch 
 */

const removeTodoItem = async (dispatch, id, uiActions) => {

    try {

        const shouldDelete = window.confirm('Are you sure you want to delete this todo?');

        if (shouldDelete) {

            uiActions.setPageLoader(true);
            const data = await httpRequset(`${editTodoListAPI}/${id}`, "DELETE");
            uiActions.setPageLoader(false);

            dispatch({
                type: refreshTodoDataKey,
            });

        }
    } catch (ex) {

        uiActions.setPageLoader(false);
        toast.error('Todo status updated unsuccessfully!, try again!', errorStyle);
        console.log("Ex:- ", ex)

    }
}



const todoActions = (dispatch, uiActions) => {

    return {

        requestData: () => requestData(dispatch, uiActions),
        removeTodoItem: (id) => removeTodoItem(dispatch, id, uiActions),
        addTodoItem: (body) => addTodoItem(dispatch, body, uiActions),
        editTodoItem: (id, body) => editTodoItem(dispatch, id, body, uiActions),

    }
}

export {
    todoActions
}