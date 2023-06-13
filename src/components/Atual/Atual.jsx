import React from "react";
import "./Atual.css";
function Atual(props) {
  return (
    <div id="atual">
      <div>Jogador Atual</div>Simbolo: {props.jogadorAtual === 1 ? "X" : "0"}
    </div>
  );
}

export default Atual;
