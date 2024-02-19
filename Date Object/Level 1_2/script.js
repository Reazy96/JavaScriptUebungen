let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const output = document.querySelector(".output");

const date = new Date();
const dateYear = new Date().getFullYear();
const dateDay = new Date().getDate();
const dateHours = new Date().getHours();
const dateMinutes = new Date().getMinutes();

output.innerHTML += `${date} <br>
${dateYear} <br>
${dateDay} Tag <br>
${dateHours} Stunde <br>
${dateMinutes} Minute <br>
`;

wochenTag.forEach((itemTag) => {
  let actualDay = date.toLocaleString("default", { weekday: "long" });

  if (itemTag === actualDay) {
    output.innerHTML += `${actualDay} 
<br>
 `;
  } else {
    output.innerHTML += "";
  }
});

monate.forEach((itemMonat) => {
  let actualMonth = date.toLocaleString("default", { month: "long" });

  if (itemMonat === actualMonth) {
    output.innerHTML += `${actualMonth}

 `;
  } else {
    output.innerHTML += "";
  }
});
