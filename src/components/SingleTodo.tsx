import React, { useEffect, useRef, useState } from "react";

import { Todo } from "./Todo";
import "../styles.css";

// import { AiFillDelete } from 'react-icons/ai';
// import { AiFillEdit } from 'react-icons/ai';
// import { MdDone } from 'react-icons/md';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

type props = {
  eachTodo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<props> = ({ eachTodo, todos, setTodos }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(eachTodo.todo);

  function handleDone(id: number) {
    setTodos(
      todos.map((each) =>
        each.id === id ? { ...each, isDone: !each.isDone } : each
      )
    );
  }

  function handleDelete(id: number) {
    setTodos(todos.filter((each) => each.id !== id));
  }

  function handleEdit(e:  React.FormEvent<HTMLFormElement>, id: number) {
    e.preventDefault();

    setTodos(todos.map((each ) =>  each.id===id ? {...each, todo : editText} : each ));

    setEditMode(false);


  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{

    inputRef.current?.focus();
    
  },[editMode]);

  return (
    <form className="singleTodo" key={eachTodo.id} onSubmit={(e)=> handleEdit(e,eachTodo.id)}>
      {editMode ? (
        <input className="editor_input" value={editText} onChange={(e)=> setEditText(e.target.value)  } ref={inputRef}></input>
      ) : eachTodo.isDone ? (
        <s>{eachTodo.todo}</s>
      ) : (
        <span>{eachTodo.todo}</span>
      )}

      <div>
        <span
          onClick={(e) => {
            if (!editMode && !eachTodo.isDone) {
              setEditMode(true);
             
            }
          }}
        >
          {" "}
          <EditIcon className="icon"></EditIcon>
        </span>
        <span onClick={(e) => handleDelete(eachTodo.id)}>
          <DeleteIcon className="icon"></DeleteIcon>
        </span>
        <span onClick={(e) => handleDone(eachTodo.id)}>
          {" "}
          <DoneIcon className="icon"></DoneIcon>
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
