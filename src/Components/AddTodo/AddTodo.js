import React from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './AddTodo.module.css'

const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')
    const [descr, setDescr] = useState('')

    function saveTodo() {
        setTodo(
            [...todo,  {
                id:  Math.random().toString(36).substring(2, 9),
                description:descr ,
                title: value, 
                status: true
            }]
        )
        setValue('')
        setDescr('')
    }

  return (
    <Row>
        <Col className={s.addTodoForm} >
            <Form.Control placeholder='Введите дело' value={todo.title} onChange={ (e) =>setValue(e.target.value) } />
            <Form.Control placeholder='Введите описние' value={todo.description} onChange={ (e) =>setDescr(e.target.value) } />
            <Button className='s.btn' onClick={saveTodo}>Добавить</Button>
        </Col>

    </Row>
  )
}

export default AddTodo
