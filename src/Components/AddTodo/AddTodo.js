import React from 'react'
import { useState } from 'react'

const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo,  {
                id:  Math.random().toString(36).substring(2, 9),
                title: value, 
                status: true
            }]
        )
    }

  return (
    <div>
        <input placeholder='Введите дело' value={value} onChange={ (e) =>setValue(e.target.value) } />
        <button onClick={saveTodo}>Сохранить</button>
    </div>
  )
}

export default AddTodo
