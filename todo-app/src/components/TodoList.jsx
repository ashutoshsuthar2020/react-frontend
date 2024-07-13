import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./TodoItem";
function ToDoList() {
  const { todos } = useContext(TodoItemsContext);

  return (
    <div>
      {todos.length === 0 ? (
        <h1>Enjoy your day</h1>
      ) : (
        todos.map((todo) => <ToDoItem key={todo.text} todo={todo} />)
      )}
    </div>
  );
}
export default ToDoList;
