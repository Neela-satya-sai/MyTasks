import React from "react";
import { useRef } from "react";

interface props {
  todo: String;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  handleAdd: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputField: React.FC<props> = ({ todo, setTodo, todos, handleAdd }) => {

  // const inputRef = useRef<HTMLInputElement>(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      handleAdd([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        // inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter task.."
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        // ref={inputRef}
      ></input>
      <button type="submit" className="input__submit">
        go
      </button>
    </form>
  );
};

export default InputField;
