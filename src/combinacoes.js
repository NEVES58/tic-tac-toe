import "./src/components/minigame/jogogalo.jsx";
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