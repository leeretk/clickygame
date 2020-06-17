import React from "react";
import "./style.css";

function Nav(props) {
  return <h3 className="nav">{props.children}</h3>;
}

export default Nav;
