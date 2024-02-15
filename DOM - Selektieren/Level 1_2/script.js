// const myFunction = () => {
//   let htmlElemente = document.getElementsByClassName("example");

//   console.log(htmlElemente);
//   console.log(htmlElemente[0], htmlElemente[1], htmlElemente[2], htmlElemente[3]);

//   //   htmlElemente[0].style.backgroundColor = "black";
//   //   htmlElemente[1].style.backgroundColor = "black";
//   //   htmlElemente[2].style.backgroundColor = "black";
//   //   htmlElemente[3].style.backgroundColor = "black";
//   //   htmlElemente[4].style.backgroundColor = "black";
//   //   htmlElemente[4].style.color = "white";
// };
let clickCount = 0;
const myFunction = () => {
  clickCount++;

  console.log(clickCount);

  let htmlElemente = document.getElementsByClassName("example");

  if (clickCount % 2 === 0) {
    for (let i = 0; i < htmlElemente.length; i++) {
      htmlElemente[i].style.backgroundColor = "black";
      htmlElemente[i].style.color = "white";

      htmlElemente[4].style.color = "white";
    }
  } else if (clickCount % 2 !== 0) {
    for (let i = 0; i < htmlElemente.length; i++) {
      htmlElemente[i].style.backgroundColor = "white";
      htmlElemente[i].style.color = "black";

      htmlElemente[4].style.color = "black";
    }
  }
};
