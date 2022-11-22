import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import s from './TodoList.module.css'

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);

  const [value, setValue] = useState('')
  const [descr, setDescr] = useState('')

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id, title, description) {
    setEdit(id);
    setValue(title)
    setDescr(description)

  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
         if (item.id === id) {
            item.title = value
            item.description = descr
    }
    return item;
})
    setTodo(newTodo);
    setEdit(null)
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input onChange={(e) =>setValue(e.target.value)} value={value} />
              <input onChange={(e) =>setDescr(e.target.value)}  value={descr} />
            </div>
          ) : (
            <div>
              <h2>{item.title} </h2>
              <p>{item.description}</p>
            </div>
          )}

          {edit === item.id ? (
            <Button onClick={() => saveTodo(item.id)}>Сохранить</Button>
          ) : (
            <div>
              <Button   onClick={() => deleteTodo(item.id)}>Удалить</Button>
              <Button className={s.btn} onClick={() => editTodo(item.id, item.title, item.description)}>Редактировать</Button>
              <Button className={s.btn} onClick={() => statusTodo(item.id)}>Закрыть/ Открыть</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
