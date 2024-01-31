function checkAge() {
  // ich erstelle mir 2 Variablen: //

  // 1x um den eingegeben Wert im Imput einer Variable zugeben.
  const myInputAge = document.querySelector("#age").value;

  // 1 x um meinem Button mit dem <p> zu verbinden.
  const clickBtn = document.querySelector("p");

  // jetzt erstelle ich eine Bedingung mit "if" indem ich meine Variable die den Wert hat, mit einer Zahl vergleiche.
  // dieses Ergebnis soll das mit dem innerHTML welches die 2te Variable auslöst auf den <p> übertragen werden.

  if (myInputAge < 18) {
    clickBtn.innerHTML = "minderjährig";
    console.log("minderjährig");
  }
  //  mit else sagst du "ansonsten führe diese innerHTML aus"
  else {
    console.log("volljährig");
    clickBtn.innerHTML = "volljährig";
  }
}
