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
    const [date, setDate] = useState('')
    const [file, setFile] = useState('')

    function saveTodo() {
        if(value && descr && date && file)  {
            
            setTodo(
                [...todo,  {
                    id:  Math.random().toString(36).substring(2, 9),
                    description:descr ,
                    title: value, 
                    date:date,
                    file: file,
                    status: true
                }]
            )
            setValue('')
            setDescr('')
            setDate('')
            setFile('')
        }
    }

  return (
    <Row>
        <Col className={s.addTodoForm} >
            <Form.Control placeholder='Введите дело' value={value} onChange={ (e) =>setValue(e.target.value) } />
            <Form.Control placeholder='Введите описание' value={descr} onChange={ (e) =>setDescr(e.target.value) } />
            <Form.Control type='date' value={date} onChange={ (e) =>setDate(e.target.value) } />
            <Form.Control type='file' value={file} onChange={ (e) =>setFile(e.target.value) } />
            <Button className='s.btn' onClick={saveTodo}>Добавить</Button>
        </Col>

    </Row>
  )
}

export default AddTodo
