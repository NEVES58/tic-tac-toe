import React from "react";
import "./square.css";
function Square({ onClick, jogada, ISDISABLED }) {
  function getcolor(jogada) {
    if (jogada == 2) {
      return "blue";
    } else if (jogada == 1) {
      return "red";
    } else {
      return "white";
    }
  }
  function sim(jogada) {
    if (jogada == 2) {
      return "O";
    } else if (jogada == 1) {
      return "X";
    } else {
      return " ";
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={jogada !== 0 || ISDISABLED}
      className="celula"
    >
      <div className="simb" style={{ color: getcolor(jogada) }}>
        {sim(jogada)}
      </div>
    </button>
  );
}

export default Square;
