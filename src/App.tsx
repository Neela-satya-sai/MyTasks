import React, { useState } from 'react';
import { Todo } from './components/Todo';

import './App.css';
import "./styles.css"
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const  App : React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  

  console.log(todos);

  return (
    <div className="App">
       <span className='heading'>My Tasks</span>
       <InputField todo={todo} setTodo={setTodo} todos={todos} handleAdd={setTodos}></InputField>
       <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
