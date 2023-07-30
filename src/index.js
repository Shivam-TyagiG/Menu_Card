import React from "react";
import ReactDom from "react-dom";
import "./index.css"; 
import App from './App';
// For application Increment Decrement
ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);