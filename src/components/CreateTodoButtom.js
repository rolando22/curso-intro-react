import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButtom(props) {
    const onClickButton = () => {
        alert("Aquí se debería abrir un modal");
    }
    
    return(
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };