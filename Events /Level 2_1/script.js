const grau = document.querySelector("#grauTaste");
const weiss = document.querySelector("#weissTaste");
const blau = document.querySelector("#blauTaste");
const gelb = document.querySelector("#gelbTaste");

grau.addEventListener("click", () => {
  document.body.style.backgroundColor = "grey";
});

weiss.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

blau.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

gelb.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
