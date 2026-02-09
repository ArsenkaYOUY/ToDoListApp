import { useState } from 'react'
import  ToDoList from './components/ToDoList/ToDoList.jsx'
import Header from './components/ToDoList/Header/Header.jsx';
import SearchTaskForm from './components/ToDoList/SearchTaskForm/SearchTaskForm.jsx'
import AddTaskForm from "./components/ToDoList/AddTaskForm/AddTaskForm.jsx";
import TasksContainer from './components/ToDoList/TasksContainer/TasksContainer.jsx'

import './styles/_main.scss'

function App() {
    return (
        <ToDoList />
    )
}

export default App
