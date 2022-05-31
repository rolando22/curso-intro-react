import React from "react";
import "./TodoList.css";

function TodoList({ error, loading, searchTodos, onError, onLoading, onEmpty, render }) {
    return(
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !searchTodos.length) && onEmpty()}
            
            <ul>
                {searchTodos.map(render)}
            </ul>
        </section>
    );
}

export { TodoList };