import React from "react"
import ReactDOM from "react-dom"
// import { createRoot } from 'react-dom/client';

function Main() {
    return (
    <div className="main-div">
        <h1>React</h1>
        <ul className="main-list">
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img className="bg-img" src="images/Group.png"></img>
    </div>
    )
}

export default Main