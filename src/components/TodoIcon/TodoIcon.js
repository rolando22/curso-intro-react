import React from "react";
import "./TodoIcon.css";

const iconTypes = {
    check:"√",
    delete:"X",
};

function TodoIcon({ type, color = 'gray', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };