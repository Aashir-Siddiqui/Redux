import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, clearTasks, delTask } from './features/task/TaskSlicer'

export default function Todo() {

    const [todos, setTodos] = useState("")

   const tasks = useSelector((state) => state.taskReducer?.task ?? []);

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()
        if (todos.trim()) {
            dispatch(addTask(todos))
            setTodos("")
        }
    }

    const deleteTask = (id) => {
        dispatch(delTask(id))
    }

    function clearAllTasks() {
        dispatch(clearTasks());
        setTodos("");
    }

    return (
        <section className="min-h-screen flex items-center bg-gray-900 justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold text-center text-gray-200 flex items-center mb-8">Todo App</h1>
                <form onSubmit={formSubmit}>
                    <div className='flex items-center justify-center mb-8'>
                        <input
                            type="text"
                            placeholder="Enter Todo"
                            autoComplete="off"
                            value={todos}
                            onChange={(e) => setTodos(e.target.value)}
                            className="flex-1 p-1 sm:p-2 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-violet-600 bg-gray-700 text-gray-200 placeholder-gray-500"
                        />
                        <button
                            type="submit"
                            className="bg-violet-600 text-white text-sm sm:text-base px-4 py-2 rounded-r-md hover:bg-violet-700 transition cursor-pointer"
                        >
                            Add Todo
                        </button>
                    </div>
                    <ul className="space-y-2 mb-4">
                        {
                            tasks.map((currTask, index) => {
                                return <li className="flex items-center justify-between w-full my-5" key={index}>
                                    <p className='text-white text-xl sm:text-2xl'>{index}: {currTask}</p>
                                    <button className='bg-violet-700 text-white cursor-pointer px-1 py-1 sm:px-2 sm:py-2 rounded-md w-12 sm:w-16 hover:bg-violet-800 transition' onClick={() => deleteTask(index)}>Del</button>
                                </li>
                            })
                        }
                    </ul>
                </form>
                <button
                    className="bg-violet-700 text-white mt-5 cursor-pointer px-4 py-2 rounded-md w-full hover:bg-violet-800 transition"
                    onClick={clearAllTasks}
                >
                    Clear All
                </button>
            </div>
        </section>
    )
}
