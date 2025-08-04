import React from 'react'
import "../styles.css"
 import SingleTodo from './SingleTodo';
import  Todo from "./Todo";

interface props{

  todos:Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({todos, setTodos})=> {
  return (
    <div className='todos'>
      {  todos.map((eachTodo)=> <SingleTodo key={eachTodo.id} eachTodo={eachTodo} todos={todos} setTodos={setTodos}></SingleTodo>) }
    </div>
  )
}

export default TodoList