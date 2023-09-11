import {
    createContext,
    useReducer,
} from 'react';

import { uiActions } from '../actions/uiActions.action';
import { pageLoaderSatatusKey } from '../../../configs/action-keys';



const initialState = {

    isload: false,

};

const UIContext = createContext({});


const uiReducer = (state, action) => {

    switch (action.type) {
        case pageLoaderSatatusKey:
            return {
                ...state,
                isload: action.payload
            }
        default:
            return state;
    }

}

const UIContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, initialState);
    const dispatchActions = uiActions(dispatch);

    return (

        <UIContext.Provider value={[state, dispatchActions]}>
            {children}
        </UIContext.Provider>

    )
}

export {

    UIContext,
    UIContextProvider,

}