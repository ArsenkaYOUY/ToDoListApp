import styles from './toDoList.module.scss'

export default function ToDoList({children}) {

    return(
        <div className={styles.toDoListWrapper}>
            <div className={styles.toDoList}>
                {children}
            </div>
        </div>
    )
}