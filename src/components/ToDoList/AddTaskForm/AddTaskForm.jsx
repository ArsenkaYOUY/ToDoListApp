import styles from "./AddTaskForm.module.scss"
import {useState} from "react";

export default function AddTaskForm({onAddTask}) {
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <form className={styles.addForm} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Task Title"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className={styles.button}>Add</button>
        </form>
    )
}