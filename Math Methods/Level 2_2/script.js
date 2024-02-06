const game = () => {
  let myTip = Number(
    window.prompt("Schätzen Sie die Nummer zwischen 1 und 10")
  );
  console.log(myTip);

  let rightNum = Math.ceil(Math.random() * 10);

  if (myTip === rightNum) {
    console.log(`Gewonnen!, Du hast die Richtige Zahl ${rightNum} erraten!`);
  } else {
    console.log(`Verloren!, Die Zahl war ${rightNum}`);
  }
};

game();
