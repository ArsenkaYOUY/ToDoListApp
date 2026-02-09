import styles from "./SearchTaskForm.module.scss"
import {useState} from "react";

export default function SearchTaskForm({onSearchTask}) {
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        onSearchTask(inputValue);
    }

    function onChange(e) {
        setInputValue(e.target.value);
        onSearchTask(e.target.value);
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Search Task"
                onChange={e => onChange(e)}
                className={styles.input}
            />
            <button type="submit" className={styles.searchButton}>
                <svg  viewBox="-3 -3 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8 12.8L9.90005 9.9M11.4667 6.13334C11.4667 9.07886 9.0789 11.4667 6.13338 11.4667C3.18786 11.4667 0.800049 9.07886 0.800049 6.13334C0.800049 3.18782 3.18786 0.800003 6.13338 0.800003C9.0789 0.800003 11.4667 3.18782 11.4667 6.13334Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </form>
    )
}