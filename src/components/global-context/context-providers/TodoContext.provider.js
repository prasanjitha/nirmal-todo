import { createContext, useReducer, useContext } from 'react';

import { UIContext } from './UIContext.provider';
import { todoActions } from '../actions/todoActions.action';
import { refreshTodoDataKey, requestTodoDataKey } from '../../../configs/action-keys';



const initialState = {

    todoList: [],
    refreshStatus: true,

};

const TodoContexts = createContext({});


const todoReducer = (state, action) => {

    switch (action.type) {
        case requestTodoDataKey:
            return {
                ...state,
                todoList: action.payload
            }
        case refreshTodoDataKey:
            return {
                ...state,
                refreshStatus: !state.refreshStatus
            }
        default:
            return state;
    }

}

const TodoContextProvider = ({ children }) => {

    const [, uiActions] = useContext(UIContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const dispatchActions = todoActions(dispatch, uiActions);

    return (

        <TodoContexts.Provider value={[state, dispatchActions]}>
            {children}
        </TodoContexts.Provider>

    );
}

export {

    TodoContexts,
    TodoContextProvider,

}