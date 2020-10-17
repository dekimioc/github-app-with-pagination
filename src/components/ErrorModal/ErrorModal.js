import React from 'react';
import "./ErrorModal.scss";

const ErrorModal = ({ message }) => {
    return (
        <div className="error-message-container text-center mt-5">
            <h1 className="color-error">{message}</h1>
        </div>
    )
}

export default ErrorModal;