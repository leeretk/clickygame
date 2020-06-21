
import React from "react";
import "./style.css";

function Quote(props) {
  return ( 
  
  <div className="quotestyle" onClick={()=>props.handleClick(props.id)}>
  <h6>{props.children}</h6>
  </div>
  );
}
export default Quote;
