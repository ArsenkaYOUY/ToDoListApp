import styles from "./TasksContainer.module.scss"
import TasksHeader from "./TasksHeader/TasksHeader.jsx"
import TasksList from "./TasksList/TasksList.jsx"

export default function TasksContainer() {
    return (
        <div className={styles.tasksContainer}>
            <TasksHeader  />
            <TasksList />
        </div>
    )
}