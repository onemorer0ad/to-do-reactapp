import React, { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/TodoList";
import {Container} from 'react-bootstrap'


function App() {



  const [todo, setTodo] = useState([
    {
      id:1,
      title: 'first todo',
      description: 'Описание',
      date: '25 01 2024',
      status: true,
    },
    {
      id:2,
      title: 'second todo',
      description: 'Описание',
      date: '25 01 2024',
      status: true,
    },
    {
      id:3,
      title: 'third todo',
      description: 'Описание',
      date: '25 01 2024',
      status: false,
    },
  ])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />

    </Container>
  );
}

export default App;
