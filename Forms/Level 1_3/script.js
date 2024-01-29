function noRefreshing(event) {
  event.preventDefault();
  //refreshing der Seite welches das Submit auslöst, ausschalten

  let year1 = document.querySelector("#number1").value;
  let year2 = document.querySelector("#number2").value;
  let difference = year1 - year2;

  // 3 variablen erstellt = zwei Werte und eine für das Ergebnis.
  // Dann soll der eingegebene Input Wert abgespeichert werden.
  console.log(difference);
  const putInHtml = document.querySelector(".result");
  // hier  steuere ich mit einer Variable auf den <p>-Tag
  putInHtml.innerHTML += difference;

  // dann füge ich es ein
}
