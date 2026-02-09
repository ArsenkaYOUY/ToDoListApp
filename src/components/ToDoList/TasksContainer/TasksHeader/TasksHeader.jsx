import styles from "./TasksHeader.module.scss"

export default function TasksHeader({tasksCount,isSearching, deleteAllTasks, deleteAllFoundTasks}) {
    function deleteTasks() {
        if (isSearching) {
            deleteAllFoundTasks()
        } else {
            deleteAllTasks()
        }
    }

    return (
        <div className={styles.tasksHeaderInner}>
            <h3 className={styles.tasksHeader}>Total Tasks : {tasksCount}</h3>
            <button className={styles.deleteButton} onClick={deleteTasks} >Delete All</button>
        </div>
    )
}