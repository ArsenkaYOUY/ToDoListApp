import  {useState, createContext, useContext} from 'react';
import styles from "./TasksList.module.scss"
import Task from "./Task/Task.jsx"
import {ToDoListContext} from "@components/ToDoList/ToDoListContext.jsx"
import {TasksListContext} from "./TasksListContext.jsx"

export default function TasksList() {
    const [editText, setEditText] = useState('');
    const [editingId, setEditingId] = useState(null);

    const {getTasksToDisplay} = useContext(ToDoListContext);

    return (
        <TasksListContext.Provider value={{
            editText, setEditText,
            editingId, setEditingId
        }} >
            <ul className={styles.tasksList}>
                {getTasksToDisplay()?.map((task) => {
                        return (
                           <Task key={task.id} task={task} />
                        )
                    })
                }
            </ul>
        </TasksListContext.Provider>
    )
}