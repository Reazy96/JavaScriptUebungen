let output = document.querySelector(".output");

let date0 = new Date(2019, 8, 2, 9, 0, 0);
console.log(date0);

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(31556908800);
console.log(date2);

let date3 = new Date(86400000);
console.log(date3);

output.innerHTML += `${date0} new Date("September 2, 2019, 09:00:00) <br>
${date1} new Date(0) <br>
${date2} new Date(31556908800) <br>
${date3} new Date(86400000) <br>

`;
