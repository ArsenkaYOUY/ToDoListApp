import styles from "./TasksContainer.module.scss"
import TasksHeader from "./TasksHeader/TasksHeader.jsx"
import TasksList from "./TasksList/TasksList.jsx"

export default function TasksContainer({tasks, onToggleTask, onTaskChange, isSearching,deleteTask, deleteAllTasks, deleteAllFoundTasks}) {
    return (
        <div className={styles.tasksContainer}>
            <TasksHeader tasksCount={tasks.length} isSearching={isSearching} deleteAllTasks={deleteAllTasks} deleteAllFoundTasks={deleteAllFoundTasks} />
            <TasksList
                tasks={tasks}
                onToggleTask={onToggleTask}
                onTaskChange={onTaskChange}
                deleteTask={deleteTask}
            />
        </div>
    )
}