import {useState} from "react";
import {ToDoListContext} from "./ToDoListContext.jsx"
import styles from './toDoList.module.scss'
import Header from "@components/ToDoList/Header/Header.jsx";
import AddTaskForm from "@components/ToDoList/AddTaskForm/AddTaskForm.jsx";
import SearchTaskForm from "@components/ToDoList/SearchTaskForm/SearchTaskForm.jsx";
import TasksContainer from "@components/ToDoList/TasksContainer/TasksContainer.jsx";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchTasks, setSearchTasks] = useState([]);

    function onAddTask(taskText) {
        const newTasks = [...tasks, { text: taskText, id: Date.now(), isChecked: false }];
        setTasks(newTasks);
    }

    function onToggleTask(toggledTask) {
        setTasks(prevTasks => prevTasks.map((task) =>
            task.id === toggledTask.id
                ? {...task, isChecked: !task.isChecked }
                : task
        ));

        if (isSearching) {
            setSearchTasks(prevTasks => prevTasks.map((task) =>
                task.id === toggledTask.id
                    ? {...task, isChecked: !task.isChecked }
                    : task
            ))}
    }

    function onSearchTask(taskText) {
        const trimmedTaskText = taskText.trim();
        if (!trimmedTaskText) {
            setIsSearching(false);
            setSearchTasks([]);
            return;
        }
        const tasksToSearch = tasks.filter(task =>
            task.text.toLowerCase().includes(trimmedTaskText.toLowerCase())
        )

        setSearchTasks(tasksToSearch);
        setIsSearching(true);
    }

    function onCancelSearch() {
        setIsSearching(false);
        setSearchTasks([]);
    }

    function getTasksToDisplay() {
        return isSearching ? searchTasks : tasks;
    }

    function onTaskChange(changedTask) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === changedTask.id
                    ? {...task, text:changedTask.text }
                    : task
            )
        )

        if (isSearching) {
            setSearchTasks(prevSearchTasks =>
                prevSearchTasks.map(task =>
                    task.id === changedTask.id
                        ? {...task, text: changedTask.text}
                        : task
                )
            );
        }

    }

    function deleteTask(taskId) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

        if (isSearching) {
            setSearchTasks(prevSearchTasks => prevSearchTasks.filter(task => task.id !== taskId));
        }
    }

    function deleteAllTasks() {
        setTasks([]);
        setSearchTasks([]);
        setIsSearching(false);
    }

    function deleteAllFoundTasks() {
        if (!isSearching || searchTasks.length === 0)
            return;

        const foundTasksIds = searchTasks.map(task => task.id);

        setTasks(prevTasks => prevTasks.filter(task => !foundTasksIds.includes(task.id)));
        setSearchTasks([]);
    }

    return(

            <div className={styles.toDoListWrapper}>
                <div className={styles.toDoList}>
                    <Header  />
                    <AddTaskForm onAddTask={onAddTask} />
                    <SearchTaskForm onSearchTask={onSearchTask} onCancelSearch={onCancelSearch} />
                    <ToDoListContext.Provider value={
                        {
                            setTasks,
                            isSearching, setIsSearching,
                            searchTasks, setSearchTasks,
                            onToggleTask, getTasksToDisplay,
                            onTaskChange, deleteTask,
                            deleteAllTasks, deleteAllFoundTasks,
                        }}
                    >
                         <TasksContainer />
                    </ToDoListContext.Provider>
                </div>
            </div>

    )
}