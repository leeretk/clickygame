import React from "react";
import "./style.css";

function Alert(props) {
  console.log(props);

  return (
    <div className={`alert alertstyle alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Alert;
