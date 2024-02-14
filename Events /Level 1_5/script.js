let counterBtn = document.getElementById("clickMe");
let counter = 0;
console.log(counterBtn);

counterBtn.addEventListener("click", () => {
  counter++;
  counterBtn.innerHTML = "Click me: " + counter;
});
