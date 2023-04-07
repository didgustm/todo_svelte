import { writable } from "svelte/store"

const _todos = [
    {
        id: 1,
        done: true,
        content: 'Using Store'
    },
    {
        id: 2,
        done: true,
        content: 'Add CRUD'
    },
    {
        id: 3,
        done: false,
        content: 'Connect DB Server'
    }
]

let todoId = _todos.length;

function createTodoValue(){
    const { subscribe, set } = writable('');
    return {
        subscribe,
        submit: value => set(value)
    }
}

function setTodo(){
    const { subscribe, update } = writable(_todos);
    
    const insert = value => {
        update(list => {
            const newList = [...list];
            const newTodo = {
                id: ++todoId,
                done: false,
                content: value
            }
            return [...newList, newTodo];
        })
    }

    const check = id => {
        update(list => {
            const newList = [...list];
            newList.filter(todo => todo.id == id? todo.done = !todo.done: todo.done);
            return newList
        })
    }

    const remove = id => {
        update(list => {
            const newList = [...list];
            const newTodos = newList.filter(todo => todo.id !== id);
            return newTodos;
        })
    }

    return { subscribe, insert, check, remove }
}

export const todoValue = createTodoValue();
export const todos = setTodo();
