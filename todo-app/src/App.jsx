import "./App.css";
import ToDoList from "./components/TodoList";
import AddToDo from "./components/AddToDo";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <h1>TODO APP</h1>
        <AddToDo />
        <ToDoList />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
