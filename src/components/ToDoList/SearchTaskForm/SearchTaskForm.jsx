import styles from "./SearchTaskForm.module.scss"
import {useState} from "react";

export default function SearchTaskForm({onSearchTask, onCancelSearch}) {
    const [inputValue, setInputValue] = useState('')

    function handleClick() {
        setInputValue('')
        onCancelSearch()
    }

    function onChange(e) {
        setInputValue(e.target.value);
        onSearchTask(e.target.value);
    }

    return (
        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                value={inputValue}
                placeholder="Search Task"
                onChange={e => onChange(e)}
                className={styles.input}
            />

            <span className={styles.cancelSearchButton} onClick={() => handleClick()}></span>
        </form>
    )
}