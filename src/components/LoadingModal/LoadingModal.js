import React from 'react';
import './LoadingModal.scss';

const LoadingModal = () => (
    <div className="spin-container">
        <div className="spin-content">
            <div className="loadingspinner"></div>
            <h1>Loading...</h1>
        </div >
    </div >
);

export default LoadingModal;