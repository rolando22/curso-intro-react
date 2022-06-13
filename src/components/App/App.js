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
import { EmptySearchTodos } from "../EmptySearchTodos/EmptySearchTodos";
import { ChangeAlertWithStorageListener } from "../ChangeAlert/ChangeAlert";

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
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </TodoHeader>
        <TodoList
            error={error}
            loading={loading}
            totalTodos={totalTodos}
            searchTodos={searchTodos}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmpty={() => <EmptyTodos />}
            onEmptySearchResults={() => <EmptySearchTodos searchText={searchValue}/>}
            render={todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodo={() => completeTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)}
                />
            )}
        />
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
        <ChangeAlertWithStorageListener
            sincronize={sincronizeTodos}
        />
    </React.Fragment>
  );
}

export default App;
