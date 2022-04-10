import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { FormControl, Button } from 'react-bootstrap'

function App() {
  const [todo, setTodo] = useState('')
  const addTodo = () => {
    console.log(todo)
    setTodo('')
  }
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <h2 className='mt-5'>Todo List</h2>
      <div className='d-flex w-50'>
        <FormControl
          className='w-75 me-3 '
          placeholder="Todo Input"
          value={ todo }
          onChange={(e) => setTodo(e.target.value)}/>
        <Button onClick={addTodo} >Add todoList</Button>
      </div>
      <div>TodoBar</div>
    </div>
  );
}

export default App;
