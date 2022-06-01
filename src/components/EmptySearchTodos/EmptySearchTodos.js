import React from "react";

function EmptySearchTodos({ searchText }) {
    return (
        <p>No hay resultados para {searchText}</p>
    );
}

export { EmptySearchTodos };