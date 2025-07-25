import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    task: []
}

export const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
        delTask: (state, action) => {
            const index = action.payload
            state.task.splice(index, 1)
        },
        clearTasks: (state) => {
            state.task = [];
        }
    }
})

export const { addTask, delTask, clearTasks } = taskReducer.actions