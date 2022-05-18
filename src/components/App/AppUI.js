import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

export function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchTodos.length) && <p>¡Crea tu primer TODO!</p>}
                { searchTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    completeTodo={() => completeTodo(todo.text)}
                    deleteTodo={() => deleteTodo(todo.text)}
                />
                )) }
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}