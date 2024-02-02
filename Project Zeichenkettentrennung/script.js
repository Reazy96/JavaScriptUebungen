function stringCutMachine() {
  const inputText = document.querySelector("#input-txt").value;
  const inputCut = document.querySelector("#input-cut").value;
  console.log(inputCut.lengt);
  //   const cutBefore = document.querySelector("#cut-before").checked;
  //   const cutAfter = document.querySelector("#cut-after").checked;
  const cutting = document.querySelector('input[name="cutting"]:checked').value;
  const outputBefore = document.querySelector(".vorderer-teil");
  const outputAfter = document.querySelector(".hinterer-teil");
  const error = document.querySelector("h6");

  if (inputText.length > 0 && inputCut.length > 0) {
    error.innerHTML = "";
    if (inputText.indexOf(inputCut) > 0) {
      error.innerHTML = "";

      if (cutting === "before") {
        outputBefore.innerHTML = inputText.slice(0,inputText.indexOf(inputCut));
        outputAfter.innerHTML = inputText.slice(inputText.indexOf(inputCut));
      } else if (cutting === "after") {
        outputBefore.innerHTML = inputText.slice(0,inputText.indexOf(inputCut));
        outputBefore.innerHTML = inputText.slice(0,inputText.indexOf(inputCut) + inputCut.length );
        outputAfter.innerHTML = inputText.slice(inputText.indexOf(inputCut) + inputCut.length);
      }
    } else {
      error.innerHTML = "Zeichen nicht vorhanden";
    }
  } else {
    error.innerHTML = "Error";
  }
}
