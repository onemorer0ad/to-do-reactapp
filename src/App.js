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
      status: true,
    },
    {
      id:2,
      title: 'second todo',
      description: 'Описание',
      status: true,
    },
    {
      id:3,
      title: 'third todo',
      description: 'Описание',
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
