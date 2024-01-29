function getInputValueYear(event) {
  event.preventDefault();
  //Neuladen der Seite durch beätigen von Submit verhindert

  const myYear = document.querySelector("#number").value;
  let resultJS = 2024 - myYear;
  //Eine Variable erstellen indem das eingetragene im input als wert gespeichert wird
  //variable mit der rechnung
  console.log(resultJS);

  const putInHtml = document.querySelector(".resultHTML");
  //mit einer variable auf den p tag zugegriffen
  putInHtml.innerHTML = resultJS;
  //und hier habe ich den inhalt vom p tag bestimmt
}
