import styles from "./TodoItem.module.css";

function TodoItem({ title, id, status, handleToggle, handleDelete })
{
    return (
        <>
            <div className={status ? styles.tgg : null}>{title}</div>
            <button onClick={() => handleToggle(id)}>Toggle</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            </>
    )
}
export default TodoItem