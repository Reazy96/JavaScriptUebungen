function message() {
  let text = document.querySelector("#typeText").value;
  let feedback = document.querySelector("h2");
  let warning = document.querySelector("h3");

  text.length >= 1
    ? (feedback.innerHTML = text)
    : (warning.innerHTML = "Bitte gib ein Nachricht ein");
}

console.log(message);
