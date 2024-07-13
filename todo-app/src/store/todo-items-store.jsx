import { createContext,useReducer } from "react";
export const TodoItemsContext = createContext({
  todos: [],
  addNewItem: () => {},
  removeItem: () => {},
});

const todoReducer = (originalState, action) => {
  let newState = originalState;
  if (action.type === "ADD_ITEM") {
    newState = [
      ...originalState,
      { text: action.payload.todo, endDate: action.payload.endDate },
    ];
  } else if (action.type === "REMOVE_ITEM") {
    newState = originalState.filter(
      (item) => item.text !== action.payload.toRemove
    );
  }
  return newState;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todos, dispatchTodoReducer] = useReducer(todoReducer, []);
  const addNewItem = (todo, endDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { todo, endDate },
    };
    dispatchTodoReducer(newItemAction);
  };
  const removeItem = (toRemove) => {
    const removeItemAction = {
      type: "REMOVE_ITEM",
      payload: { toRemove },
    };
    dispatchTodoReducer(removeItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todos,
        dispatchTodoReducer,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
