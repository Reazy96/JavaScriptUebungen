// let numArr = [5, 22, 15, 100, 55];
// let output = document.querySelector(".output");

// for (let i = 0; i < numArr.length; i++) {
//   for (let j = 2; j < numArr[i]; j++) {
//     if (numArr[i] % j === 0) {
//       output.innerHTML += `<p> ${numArr[i]} is deviable by ${j} result is ${numArr[i] / j}</p>`;
//     }
//   }
// }

let numArr = [5, 22, 15, 100, 55];
let output = document.querySelector(".output");

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      output.innerHTML += ` <p> ${numArr[i]} ist teilbar durch ${j} und das ergebnis ist: ${numArr[i] / j} </p>`;
    }
  }
}
