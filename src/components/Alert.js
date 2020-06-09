import React from "react";

function Alert(props) {
  console.log(props);

let anumber= 100;
let myString = "Hello, I'm " + anumber + " a string with a number in it";

console.log(myString);

let myTemplateString = `I am a template string with an embedded variable: ${anumber}`

console.log(myTemplateString)

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Alert;
