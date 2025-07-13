import React from 'react'
import {createStore} from 'redux'
const ADD_TASK = 'task/add'
const DELETE_TASK = 'task/delete'

const initialState = {
    task: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }
        case DELETE_TASK:
            const updateTask = state.task.filter((currTask, index) => {
                return index !== action.payload
            })
            return {
                ...state,
                task: updateTask
            }
        default:
            return state
    }
}

const store = createStore(taskReducer)
console.log(store)

const addTask = (data) => {
    return {type: ADD_TASK, payload: data}
}

const delTask = (id) => {
    return {type: DELETE_TASK, payload: id}
}

// store.dispatch({type: ADD_TASK, payload: "Hello1"})
// console.log(store.getState())

// store.dispatch({type: ADD_TASK, payload: "Hey2"})
// console.log(store.getState())

// store.dispatch({type: DELETE_TASK, payload: 1})
// console.log(store.getState())

store.dispatch(addTask("Hello"))
console.log(store.getState())

store.dispatch(addTask("Hey"))
console.log(store.getState())

store.dispatch(delTask(1))
console.log(store.getState())

export default Store;