const multiplayTheO = () => {
  const inputText = Number(document.querySelector(".input-text").value);
  const outputText = document.querySelector(".output-text");
  const myL = (outputText.innerHTML = "L");

  for (let i = 1; i <= inputText; i++) {
    outputText.innerHTML += "o";

    console.log(outputText);
  }
  const myP = (outputText.innerHTML += "p");
};
