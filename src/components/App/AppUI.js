import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";

export function AppUI() {
    const { error, loading, searchTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch
                
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
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <p>{searchTodos[0]?.text}</p>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}