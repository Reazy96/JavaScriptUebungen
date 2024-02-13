const multiplayTheO = () => {
  const inputText = Number(document.querySelector(".input-text").value);
  const outputText = document.querySelector(".output-text");

  let abc = "";
  if (inputText % 2 === 0) {
    for (let i = 1; i <= inputText; i++) {
      outputText.innerHTML += "o";
    } // ------------------------------------
  } else if (inputText % 2 !== 0) {
    for (let j = 0; j < inputText; j++) {
      if (j % 2 === 0) {
        abc += "o";
      } else {
        abc += "O";
      }
    }
    // ------------------------------------
  } else if (inputText === 0) {
    outputText.innerHTML += "Error";
  }

  console.log(abc);
  outputText.innerHTML = "L" + abc + "p";
};
