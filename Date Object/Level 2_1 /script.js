let output = document.querySelector(".output");

function whatDate() {
  let date = new Date();
  output.innerHTML += `${date.getDate()} /
${date.getMonth()}/
${date.getFullYear()}
`;
}

whatDate();
