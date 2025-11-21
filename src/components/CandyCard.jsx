import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <div className="card">
      <img src={candy.canImage} alt="Candy" />
      <h3>{candy.brand}</h3>
      <p>{candy.descrip.slice(0, 125) + "..."}</p>
    </div>
  );
};

export default CandyCard;
