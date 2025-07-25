import React from 'react'
// import { composeWithDevToolsLogOnly } from '@redux-devtools/extension';
// import { createStore, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk';
// const ADD_TASK = 'task/add'
// const DELETE_TASK = 'task/delete'
// const FETCH_TASK = 'task/fetch'

// Old style reducer using redux
// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                 ...state,
//                 task: [...state.task, action.payload]
//             }
//         case DELETE_TASK:
//             const updateTask = state.task.filter((currTask, index) => {
//                 return index !== action.payload
//             })
//             return {
//                 ...state,
//                 task: updateTask
//             }
//         case FETCH_TASK:
//             return {
//                 ...state,
//                 task: [...state.task, ...action.payload]
//             }
//         default:
//             return state
//     }
// }

// export const store = createStore(taskReducer, composeWithDevToolsLogOnly(applyMiddleware(thunk)))
// console.log(store)

// export const addTask = (data) => {
//     return { type: ADD_TASK, payload: data }
// }

// export const delTask = (id) => {
//     return { type: DELETE_TASK, payload: id }
// }

// export const fetchTask = () => {
//     return async (dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
//             const task = await res.json()
//             // console.log(task)
//             dispatch({ type: FETCH_TASK, payload: task.map((curr) => curr.title) })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// New style reducer using redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './features/task/TaskSlicer';

export const store = configureStore({
    reducer: { taskReducer: taskReducer.reducer },
})