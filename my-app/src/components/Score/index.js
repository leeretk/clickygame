import React from "react";
import Alert from "../Alert";
import "./style.css";

//component to track score in the navbar.
 
function Score(props) {
    return (
        <nav className="navbar">

        <span>
            <h1 className="brand">React Clicky Game</h1>

            <Alert myScore={props.myScore} highScore={props.highScore} />
            <h2 className="scoring">

                Score: {props.myScore} | Top Score: {props.highScore}
            </h2>
        </span>
        </nav>
    );
}

export default Score;