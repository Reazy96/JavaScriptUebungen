function message() {
  let text = document.querySelector("#typeText").value;
  let transfer = document.querySelector("h2");
  let warning = document.querySelector("h3");

  let feedback =
    text.length >= 1
      ? (transfer.innerHTML = text)
      : (warning.innerHTML = "Bitte gib ein Nachricht ein");
}

