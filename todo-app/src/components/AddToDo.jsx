import React, { useRef, useContext, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
// import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  // const { addNewItem } = useContext(TodoItemsContext);
  const { dispatchTodoReducer } = useContext(TodoItemsContext);
  // const todoNameElement = useRef();
  // const endDateElement = useRef();
  const [todoNameElement, setTodoNameElement] = useState("");
  const [endDateElement, setEndDateElement] = useState("");

  const handleNewNameChange = (event) => {
    setTodoNameElement(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDateElement(event.target.value);
  };
  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (todoNameElement.length !== 0 && endDateElement.length !== 0)
      // addNewItem(todoNameElement, endDateElement);
      dispatchTodoReducer({
        type: "ADD_ITEM",
        payload: { todo: todoNameElement, endDate: endDateElement },
      });
    // console.log("done") &&
    //   addNewItem({
    //     text: todoNameElement.current.value,
    //     endDate: endDateElement.current.value,
    //   });
    // todoNameElement.current.value = "";
    // endDateElement.current.value = "";
    setTodoNameElement("");
    setEndDateElement("");
  };
  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClick}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              // ref={todoNameElement}
              value={todoNameElement}
              placeholder="Enter the task here."
              onChange={handleNewNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              // ref={endDateElement}
              value={endDateElement}
              onChange={handleEndDateChange}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success" type="submit">
              <BiAddToQueue />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
