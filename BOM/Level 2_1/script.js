const counter = document.querySelector("#count");
let number = 10;

let countdown = setInterval(() => {
  counter.innerHTML = `${number--}`;

  if (number < 0) {
    clearInterval(countdown);
  } else if (number === 0) {
    document.body.children[0].style.opacity = "0";

    window.open("https://www.google.de/?hl=de", "_self");
  }
}, 1000);
