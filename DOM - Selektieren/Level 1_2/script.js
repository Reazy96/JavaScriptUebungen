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

const myFunction = () => {
  let htmlElemente = document.getElementsByClassName("example");

  for (let i = 0; i < htmlElemente.length; i++) {
    htmlElemente[i].style.backgroundColor = "black";
    console.log(htmlElemente[i]);
    htmlElemente[4].style.color = "white";
  }
};
