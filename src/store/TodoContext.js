import axios from 'axios';
import React,
{
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

import { toast } from 'react-toastify';
import { errorStyle, successStyle } from '../configuration/Config';

const TodoContext = createContext();

export function useTodoContext() {

    return useContext(TodoContext);
}

export const TodoContextProvider = (props) => {

    const [todos, setTodos] = useState([]);
    const [httpError, setHttpError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isTodoChange, setIsTodoChange] = useState(false);

    const baseUrl = 'https://bordima-8169b-default-rtdb.firebaseio.com/todos.json';
    const updateUrl = 'https://bordima-8169b-default-rtdb.firebaseio.com/todos/';

    useEffect(() => {

        const fetchMeals = async () => {

            console.log('start');

            try {

                setIsLoading(true);
                const response = await axios.get(baseUrl);
                const responseData = await response.data;
                toast("Loading data success!");

                const loadedTodos = [];

                for (const key in responseData) {

                    loadedTodos.push({
                        id: key,
                        title: responseData[key].title,
                        completed: responseData[key].completed,
                    });

                }

                setTodos(loadedTodos);
                setIsLoading(false);

            } catch (error) {

                setTodos([]);
                setIsLoading(false);
                toast.error('Loading todo unsuccess!', errorStyle);

            }

        };

        fetchMeals().catch(error => {
            toast.error('Loading todo unsuccess!', errorStyle);
            setIsLoading(false);
            setHttpError(error.message);
        })

    }, [isTodoChange]);

    const addTodo = async (todoData) => {

        // const url = 'https://crudapi.co.uk/api/v1/task';
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer eBjysTtTkQZ8VF-Vn06BdlvXt-Fsr03R2a9EnFJzr1bXwl1CXA',
        // };

        const headers = {
            'Content-Type': 'application/json',
        };

        console.log(todoData);

        try {

            const response = await axios.post(baseUrl, todoData, { headers });
            setIsTodoChange(pre => !pre)
            toast.success('Todo added successfully!', successStyle);
            console.log(response.data);

        } catch (error) {

            toast.error('Todo added unsuccessfully!, try again!', errorStyle);
            console.error(error);

        }
    }

    const todoStatusUpdate = async (todoId, updatedData) => {

        try {

            const response = await axios.put(`${updateUrl}/${todoId}.json`, updatedData);
            toast.success('Todo status updated successfully!', successStyle);
            console.log('Todo status  updated successfully:', response.data);
            setIsTodoChange(pre => !pre);

        } catch (error) {

            toast.error('Todo status updated unsuccessfully!, try again!', errorStyle);
            console.error('Error updating data:', error);

        }
    }

    const deleteMyTodo = async (todoId) => {

        const shouldDelete = window.confirm('Are you sure you want to delete this todo?');

        if (shouldDelete) {

            setIsLoading(true);

            try {

                const response = await axios.delete(`${updateUrl}/${todoId}.json`,);
                console.log('Data deleted successfully:', response.data);
                toast.success('Item deleted successfully', successStyle);
                setIsLoading(false);
                setIsTodoChange(pre => !pre);

            } catch (error) {

                setIsLoading(false);
                toast.error('Item deleted unsuccess, try again!', errorStyle);
                console.log('Todo deleted unsuccess!', error);

            }
        }
    }

    return <TodoContext.Provider value={{
        todos,
        isLoading,
        httpError,
        addTodo,
        setIsTodoChange,
        deleteMyTodo,
        todoStatusUpdate,
    }}>
        {props.children}
    </TodoContext.Provider>
};

export default TodoContext;