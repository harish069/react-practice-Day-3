import styles from "./TodoItem.module.css";

function TodoItem({ title, id, status, handleToggle, handleDelete })
{
    return (
        <>
            <div className={styles.display}>
            <div className={status ? styles.tgg : null}>{title}</div>
            <button onClick={() => handleToggle(id)}>Toggle</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </>
    )
}
export default TodoItem