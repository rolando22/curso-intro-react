import React from "react";
import "./TodoList.css";

function TodoList({
    children,
    error,
    loading,
    totalTodos,
    searchTodos,
    onError,
    onLoading,
    onEmpty,
    render,
    onEmptySearchResults
}) {
    return(
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !totalTodos) && onEmpty()}
            {(!!totalTodos && !searchTodos.length) && onEmptySearchResults()}
            <ul>
                {searchTodos.map(children || render)}
            </ul>
        </section>
    );
}

export { TodoList };