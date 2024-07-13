import React from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { AiFillDelete } from "react-icons/ai";
function ToDoItem({ todo }) {
  const { dispatchTodoReducer } = useContext(TodoItemsContext);
  return (
    <div className="row">
      <div className="col-6 text-start">
        <h4>{todo.text}</h4>
      </div>
      <div className="col-4 text-start">
        <h4>{todo.endDate}</h4>
      </div>
      <div className="col-2">
        {/* <button type="button" className="btn btn-danger" onClick={()=>removeItem(todo.text)}> */}
        <button
          type="button"
          className="btn btn-danger"
          onClick={() =>
            dispatchTodoReducer({
              type: "REMOVE_ITEM",
              payload: { toRemove: todo.text },
            })
          }
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
