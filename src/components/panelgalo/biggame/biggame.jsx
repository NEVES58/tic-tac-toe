import Jogogalo from "../minigame/jogogalo";
import "./biggame.css";
import React, { useState, useEffect } from "react";
import Winner from "../../winner/winner";
import Atual from "../../Atual/Atual";
function Biggame(props) {
  const [barray, setBarray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [isGameOver, setIsGameOver] = useState(0);
  console.log(barray);
  const [jogadorAtual, setJogadorAtual] = useState(1);
  function changeSquareWinner(index, vitoria) {
    setBarray((prevArray) => {
      const updatedItems = [...prevArray];
      updatedItems[index] = vitoria;
      return updatedItems;
    });
  }
  const [timer1, setTimer1] = useState(300);
  const [timer2, setTimer2] = useState(300);

  useEffect(() => {
    let interval = null;

    if (!isGameOver) {
      if (jogadorAtual === 1) {
        interval = setInterval(() => {
          setTimer1((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        interval = setInterval(() => {
          setTimer2((prevTimer) => prevTimer - 1);
        }, 1000);
      }
    }

    return () => clearInterval(interval);
  }, [isGameOver, jogadorAtual]);
  useEffect(() => {
    if (timer1 <= 0) setIsGameOver(2);
    if (timer2 <= 0) setIsGameOver(1);
  }, [timer1, timer2]);
  useEffect(() => {
    console.log("teste");
    const i = verificaCombinacoes(barray);
    if (i !== 0) {
      console.log("Combinação encontrada!");
      console.log("FIM DO JOGO!!!");
      setIsGameOver(i);
    }
  }, [JSON.stringify(barray)]);

  function verificaCombinacoes(a) {
    let i = 0;
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

  return (
    <div id="in">
      <div id="bg">
        {barray.map(function (item, index) {
          return (
            <Jogogalo
              key={index}
              changeSquareWinner={function (vitoria) {
                changeSquareWinner(index, vitoria);
              }}
              jogador={jogadorAtual}
              setJogadorAtual={setJogadorAtual}
              disabled={item != 0 || isGameOver}
              item={item}
            />
          );
        })}
      </div>
      <div>
        {isGameOver !== 0 && (
          <div id="overlay-component">
            <Winner win={isGameOver} />
          </div>
        )}
        <Atual jogadorAtual={jogadorAtual} />
      </div>
      <div>
        <div id="tempo">Tempo do Jogador 1: {timer1}</div>
        <div id="tempo">Tempo do Jogador 2: {timer2}</div>
      </div>
    </div>
  );
}

export default Biggame;
