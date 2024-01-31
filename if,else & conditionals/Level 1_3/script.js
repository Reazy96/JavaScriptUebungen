//* mit event.preventDefault(); setzen wir die Eigenschaften des Buttons zurück, sodass wir unsere eigene funktion einbauen.
function greaterThan(event) {
  event.preventDefault();

  // ich erstelle mir 2 Variablen: //

  // 1x um den eingegeben Wert im Imput einer Variable zugeben.
  const myInputAge = document.getElementById("input").value;

  // 1 x um meinem Button mit der <h2> zu verbinden.
  const clickBtn = document.querySelector("h2");

  // jetzt erstelle ich eine Bedingung mit "if" indem ich meine Variable die den Wert hat, mit einer Zahl vergleiche.
  // dieses Ergebnis soll das mit dem innerHTML welches die 2te Variable auslöst auf den <h2> übertragen werden.

  if (myInputAge >= 18) {
    clickBtn.innerHTML = "Ja, Du darfst Call of Duty spielen";
    console.log("volljährig");
  }
  //  mit else sagst du "ansonsten führe diese innerHTML aus"
  else {
    console.log("minderjährig");
    clickBtn.innerHTML = "Nein, du darfst kein Call of Duty spielen";
  }
}
