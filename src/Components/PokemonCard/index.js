import React from "react";
import "./style.css";

function PokemonCard(props) {
  return (
    <div className="card" onClick={() => props.handleScoreIncrement(props.id)}>
        <img className="images" alt={props.name} src={props.image} />
    </div>
  );
}

export default PokemonCard;