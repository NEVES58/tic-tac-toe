import React, { useState, useEffect } from "react";
import Square from "../square/square";
import "./jogogalo.css";
import Biggame from "../biggame/biggame";

function Jogogalo(props) {
  const [array, setArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function clicar(index) {
    setArray((prevArray) => {
      const updatedItems = [...prevArray];
      updatedItems[index] = props.jogador;
      return updatedItems;
    });
    props.setJogadorAtual(props.jogador === 1 ? 2 : 1);
  }
  useEffect(() => {
    const i = verificaCombinacoes(array);
    if (i !== 0) {
      props.changeSquareWinner(i);
    }
  }, [array]);

  function verificaCombinacoes(a) {
    if (a[0] !== 0 && a[0] === a[1] && a[1] === a[2]) {
      return a[0];
    } else if (a[3] !== 0 && a[3] === a[4] && a[4] === a[5]) {
      return a[3];
    } else if (a[6] !== 0 && a[6] === a[7] && a[7] === a[8]) {
      return a[6];
    } else if (a[0] !== 0 && a[0] === a[3] && a[3] === a[6]) {
      return a[0];
    } else if (a[1] !== 0 && a[1] === a[4] && a[4] === a[7]) {
      return a[1];
    } else if (a[2] !== 0 && a[2] === a[5] && a[5] === a[8]) {
      return a[2];
    } else if (a[0] !== 0 && a[0] === a[4] && a[4] === a[8]) {
      return a[0];
    } else if (a[2] !== 0 && a[2] === a[4] && a[4] === a[6]) {
      return a[2];
    }
    return 0;
  }
  if (props.item !== 0) {
    if (props.item === 1) return <div id="tester"></div>;
    else return <div id="testeb"></div>;
  }
  return (
    <div id="teste">
      {array.map(function (item, index) {
        return (
          <Square
            key={index}
            onClick={() => clicar(index)}
            jogada={item}
            ISDISABLED={props.disabled}
          />
        );
      })}
    </div>
  );
}

export default Jogogalo;
