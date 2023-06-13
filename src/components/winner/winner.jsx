import React from "react";
import "./winner.css";

function Winner(props) {
  console.log("teste");
  if (props.win === 1)
    return (
      <div id="winplayer1">
        <div className="texto">WINNER: X</div>
      </div>
    );
  else
    return (
      <div className="texto" id="winplayer2">
        WINNER: O
      </div>
    );
}

export default Winner;
