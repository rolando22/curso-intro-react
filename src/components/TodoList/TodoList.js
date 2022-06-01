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
    const renderFunc = children || render;

    return(
        <section className="TodoList-container">
            {error && onError()}
            {loading && onLoading()}
            {(!loading && !totalTodos) && onEmpty()}
            {(!!totalTodos && !searchTodos.length) && onEmptySearchResults()}
            <ul>
                {searchTodos.map(renderFunc)}
            </ul>
        </section>
    );
}

export { TodoList };