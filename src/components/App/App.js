import React from "react";
import { useTodos } from "../../hooks/useTodos";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function App() {
  const { 
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    existingTodo,
  } = useTodos();

  return (
    <React.Fragment>
        <TodoHeader>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>
        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchTodos.length) && <EmptyTodos />}
            { searchTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodo={() => completeTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        {openModal && (
            <Modal>
                <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                existingTodo={existingTodo}
                />
            </Modal>
        )}
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

export default App;
