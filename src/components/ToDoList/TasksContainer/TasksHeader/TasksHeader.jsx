import styles from "./TasksHeader.module.scss"
import {useContext} from "react";
import {ToDoListContext} from "@components/ToDoList/ToDoListContext.jsx";

export default function TasksHeader() {
    function deleteTasks() {
        if (isSearching) {
            deleteAllFoundTasks()
        } else {
            deleteAllTasks()
        }
    }

    const {
        getTasksToDisplay, isSearching,
        deleteAllFoundTasks, deleteAllTasks
    } = useContext(ToDoListContext);

    return (
        <div className={styles.tasksHeaderInner}>
            <h3 className={styles.tasksHeader}>Total Tasks : {getTasksToDisplay().length}</h3>
            <button className={styles.deleteButton} onClick={deleteTasks} >Delete All</button>
        </div>
    )
}