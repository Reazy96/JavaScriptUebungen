let select = document.querySelector("#select-input");
let output = document.querySelector(".output");

select.addEventListener("change", () => {
  output.innerHTML = select.value;
});
