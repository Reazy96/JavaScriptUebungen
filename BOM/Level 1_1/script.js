setTimeout(() => {
  console.log("Start : warten für 1 Sekunden");
}, 1000);

let counter = Number(10);
let myTimer = setInterval(() => {
  console.log(counter--);

  if (counter === 7) {
    console.log("Erledigt. du hast 3 Sekunden verschwendet");
  } else if (counter <= 0) {
    clearInterval(myTimer);
    console.log("Endlich Feierabend");
  }
}, 1000);
