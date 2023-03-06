import React, {useState} from 'react'

const TodoList = ({task, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false);

    const FormEdit = () =>{
      const [newValue, setNewValue] = useState(task.title)

      const handleSubmit = (e) =>{
        e.PreventDefault()
      }

      const handleChange = (e) => {
        const value = e.target.value;
        setNewValue(value)
      }

      const handleUpdate = ()=> {
        onUpdate(task.id, newValue)
        setIsEdit(false)
      }

        return(
            <form className='taskUpdateForm' onSubmit={handleSubmit}>
            <input type="text" className='taskInput' onChange={handleChange} value={newValue}/>
             <button onClick={handleUpdate} className="taskEdit">Update</button>
            </form>
        )
    }

    const TodoElement = () => {
      return (
        <div  key={task.id} className="taskPanel">
        {task.title} 
        <button onClick={()=> {setIsEdit(true)}} className="taskEdit">Edit</button>
         <button onClick={()=> onDelete(task.id)} className="taskDelete">Delete</button>
        </div>
      )
    }

  return (
    <div className='taskResponse'>
        {isEdit ? <FormEdit /> : <TodoElement /> }
    </div>
  )
}

export default TodoList