// let divColor1 = document.querySelector(".div1");
// let divColor2 = document.querySelector(".div2");
// let divColor3 = document.querySelector(".div3");
// let divColor4 = document.querySelector(".div4");
// let divColor5 = document.querySelector(".div5");

// divColor1.addEventListener("click", () => {
//   divColor1.style.backgroundColor = "black";
// });
// divColor2.addEventListener("click", () => {
//   divColor2.style.backgroundColor = "black";
// });
// divColor3.addEventListener("click", () => {
//   divColor3.style.backgroundColor = "black";
// });
// divColor4.addEventListener("click", () => {
//   divColor4.style.backgroundColor = "black";
// });
// divColor5.addEventListener("click", () => {
//   divColor5.style.backgroundColor = "black";
// });






// let changeColor = (number) => {
//   console.log(number);
//   let cartColor = document.querySelector("div:nth-of-type(" + number + ")");

//   cartColor.style.backgroundColor = "black";
// };

const changeColor = () => {
  let everyDiv = document.querySelectorAll(".card");
  everyDiv.forEach((singleDiv) => {
    singleDiv.addEventListener("click", () => {
      singleDiv.style.backgroundColor = "black";
    });
  });
};


