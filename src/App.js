import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButtom } from "./components/CreateTodoButtom";

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        { todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        )) }
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
