let divNumber = document.querySelector(".zeit");
let funcBtn = document.querySelector("#btn");
let start = 100;

funcBtn.addEventListener("click", () => {
  let counter = setInterval(() => {
    divNumber.innerHTML = `${start--}%`;

    if (start < 0) {
      clearInterval(counter);
    }
  }, 200);
});
