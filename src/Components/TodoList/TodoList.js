import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import s from './TodoList.module.css'

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);

  const [value, setValue] = useState('')
  const [descr, setDescr] = useState('')
  const [date, setDate] = useState('')
  const [file, setFile] = useState('')

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

  function editTodo(id, title, description, date) {
    setEdit(id);
    setValue(title)
    setDescr(description)
    setDate(date)
    setFile(file)
  }

  function saveTodo(id) {
    let newTodo = [...todo].map(item => {
         if (item.id === id) {
            item.title = value
            item.description = descr
            item.date = date
            item.file = file
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
              <input onChange={(e) =>setDate(e.target.value)}  value={date} />
              <input onChange={(e) =>setFile(e.target.value)}  value={file} />
            </div>
          ) : (
            <div>
              <h2 className={ !item.status? s.close : ''}>{item.title} </h2>
              <p className={ !item.status? s.close : '' }>{item.description}</p>
              <p className={ !item.status? s.close : '' }>{item.date}</p>
              <div className={ !item.status? s.close : '' }>
                <img src={item.file} alt={item.file} />
                </div>
            </div>
          )}

          {edit === item.id ? (
            <Button onClick={() => saveTodo(item.id)}>Сохранить</Button>
          ) : (
            <div>
              <Button  onClick={() => statusTodo(item.id)}>
                { item.status ? 'Открыто'  : 'Закрыто' }
              </Button>
              <Button className={s.btn} onClick={() => editTodo(item.id, item.title, item.description, item.date)}>Редактировать</Button>
              <Button className={s.btn}  onClick={() => deleteTodo(item.id)}>Удалить</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
