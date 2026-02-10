import { useContext } from "react";
import { ToDoListContext } from "@components/ToDoList/ToDoListContext.jsx"
import { TasksListContext } from "../TasksListContext.jsx"
import styles from "./Task.module.scss";

export default function Task({ task }) {
    const {
        onTaskChange, deleteTask, onToggleTask
    } = useContext(ToDoListContext);

    const {
        editText, setEditText,
        editingId, setEditingId,
    } = useContext(TasksListContext);

    function onStartEditing(task) {
        setEditingId(task.id);
        setEditText(task.text);
    }

    function saveEdit(taskId) {
        if (editText.trim()) {
            onTaskChange({id : taskId, text: editText});
        }
        setEditingId(null);
        setEditText('');
    }

    function cancelEdit() {
        setEditingId(null);
        setEditText('');
    }

    let innerCode = null;

    if (editingId === task.id) {
        innerCode = (
            <>
                <input
                    type="text"
                    onChange={(e) => setEditText(e.target.value)}
                    value={editText}
                    className={styles.taskInput}
                />
                <div className={styles.editingButtons}>
                    <button
                        className={styles.button}
                        onClick={() => saveEdit(task.id)}
                    >
                        ✓
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => cancelEdit()}
                    >
                        ✕
                    </button>
                </div>
            </>
        )
    }
    else {
        innerCode = (
            <>
                <input
                    type="text"
                    onClick={() => onStartEditing(task)}
                    readOnly
                    value={task.text}
                    className={task.isChecked ? styles.taskInput + ' ' + styles.taskInputChecked : styles.taskInput}
                />
                <span className={styles.taskDeleteButton} onClick={() => deleteTask(task.id)}></span>
            </>
        )
    }

    return (
        <li className={styles.listElement}>
            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    checked={task.isChecked}
                    onChange={() => onToggleTask(task)}
                />
            </label>
            {innerCode}
        </li>
    )
}