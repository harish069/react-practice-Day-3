import { useState } from "react"
import { v4 as uuid } from "uuid";
import TodoItem from "./TodoItem";
import Completed from "./Completed";
function TodoInput()
{
    const [taskName, setTaskName] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => 
    {
        console.log(e.target.value);
        setTaskName(e.target.value);
    }

    const handleClick = (taskName) => {
        const payload = {
            title: taskName,
            status: false,
            id:uuid()
        }
     setTodos([payload, ...todos])
    }

    const handleToggle = (id) => {
        const newTodo = todos.map(e => e.id === id ? { ...e, status: !e.status } : e)
        setTodos(newTodo)
    }
    
    const handleDelete = (id) => {
        const remTodo = todos.filter(e => e.id !== id)
        setTodos(remTodo);
    }
    
    const filteredTask = todos.filter(e => e.status === true);

    return (
        <div>
            <input type="text" placeholder="Add todo" value={taskName} onChange={handleChange}/>
            <button onClick={() => handleClick(taskName)}>Add Todo</button>
            {todos.map(e => {
                return <TodoItem key={e.id} {...e} handleToggle={handleToggle} handleDelete={handleDelete} />
            })}
            {filteredTask !=[] ? <Completed filteredTask={filteredTask} /> : null}
            </div>
    )
}
export default TodoInput