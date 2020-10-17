import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";


const Header = ({ title }) => {
    return (
        <h1 className="pl-5">{title}</h1>
    )
};

export default Header;