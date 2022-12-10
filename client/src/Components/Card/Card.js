import React from "react";
import "./Card.css";

function Card({ id, firstName, lastName, fullName, title, imageUrl }) {
  return (
    <div className="got-card">
      <h1>{fullName}</h1>
      <h3>
        {firstName} {lastName}
      </h3>
      <h3>{title}</h3>
      <img className="card-img" src={imageUrl} alt={fullName} />
    </div>
  );
}

export default Card;
