
import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={()=>props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      <strong></strong>{props.name}
      <strong></strong>{props.quote}
      </div>
    </div>
  );
}

export default FriendCard;
