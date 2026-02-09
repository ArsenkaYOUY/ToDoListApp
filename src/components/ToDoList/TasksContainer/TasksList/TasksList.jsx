import {useState} from 'react';
import styles from "./TasksList.module.scss"

export default function TasksList({tasks, onTaskChange, deleteTask, onToggleTask}) {

    const [editText, setEditText] = useState('');
    const [editingId, setEditingId] = useState(null);

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

    return (
        <ul className={styles.tasksList}>
            {tasks?.map((task) => {
                return (
                    (editingId === task.id) ? (
                        <li key={task.id}>
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
                        </li>
                    ) : (
                        <li key={task.id} className={styles.listElement}>
                            <label className={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    className={styles.checkboxInput}
                                    checked={task.isChecked}
                                    onChange={() => onToggleTask(task)}
                                />
                            </label>
                            <input
                                type="text"
                                onClick={() => onStartEditing(task)}
                                readOnly
                                value={task.text}
                                className={task.isChecked ? styles.taskInput + ' ' + styles.taskInputChecked : styles.taskInput}
                            />
                            <span className={styles.taskDeleteButton} onClick={() => deleteTask(task.id)}></span>
                        </li>
                    )
                )
            })
            }
        </ul>
    )
}