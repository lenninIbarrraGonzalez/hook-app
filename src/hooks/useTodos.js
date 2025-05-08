import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    const [todoPending, setPendingTodo] = useState(0);

    const todoAll = todos.length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        const todoDone = todos.filter((todo) => todo.done === true);
        setPendingTodo(todos.length - todoDone.length);
    },[todos]);
    


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        // console.log("Este es el id", id);
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToogleTodo = (id) => {
        console.log(id);
        dispatchTodo({
            type: '[TODO] Toogle Todo',
            payload: id
        })
    }
    

    return {
        todos,
        todoAll,
        todoPending,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo

    }
}