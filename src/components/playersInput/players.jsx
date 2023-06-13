import React, { useState } from "react";
import "./players.css";
function Players() {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [showname, setShowname] = useState(false);
  function getp1(event) {
    setP1(event.target.value);
  }
  function getp2(event) {
    setP2(event.target.value);
  }
  function getp(event) {
    event.preventDefault();
    console.log(p1);
    console.log(p2);
    setShowname(true);
  }
  if (showname) {
    return (
      <div>
        <div>Player 1:{p1}--X</div>
        <div>Player 2:{p2}--O</div>
      </div>
    );
  }
  return (
    <form id="form" onSubmit={getp}>
      <label>
        Player 1:<input onChange={getp1} value={p1} id="player1"></input>
      </label>
      <label>
        Player 2:<input onChange={getp2} value={p2} id="player2"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Players;
