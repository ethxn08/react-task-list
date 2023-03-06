import React, { useState } from 'react'
import TodoList from './TodoList';

const ToDoApp = () => {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
    }
    setTasks([...tasks, newTask]);
    setTitle("")
  }

  const handleUpdateTask = (id, value) => {
    const temp = [...tasks]
    const task = temp.find(task => task.id === id)
    task.title = value;
    setTasks(temp)
  }

  const handleDelete = (id) => {
    const temp = tasks.filter(task => task.id !== id);
    setTasks(temp)

  }
  return (
    <div className='taskContainer'>
        <form className='taskCreateForm' onSubmit={handleSubmit}>
            <input className='taskInput' onChange={handleChange} value={title} />
            <input type="submit" value="Create Task" className='taskButton' onClick={handleSubmit}/>
        </form>
        <div className='TaskContainer'>
            {tasks.map((t)=>{
                return(
                   <TodoList task={t} onUpdate={handleUpdateTask} onDelete={handleDelete}/>
                )
            })}
        </div>
    </div>
  )
}

export default ToDoApp