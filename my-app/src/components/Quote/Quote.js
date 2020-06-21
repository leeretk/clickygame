import React from "react";
import "./style.css";

function Quote(props) {
  return <h1 className="quote" onClick={()=>props.handleClick(props.id)}>{props.children}</h1>;
}

export default Quote;
