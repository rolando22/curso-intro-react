import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [buttonDisable, setButtonDisable] = React.useState(false);
    const { addTodo, setOpenModal, existingTodo } =  React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
        existingTodo(event.target.value) ? setButtonDisable(true) : setButtonDisable(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                    disabled={buttonDisable}
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };