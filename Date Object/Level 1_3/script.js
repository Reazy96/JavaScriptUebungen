const output = document.querySelector(".output");

const date = new Date();

output.innerHTML += ` Aktuelle Zeit: <br>${date} <br><br>`;

date.setDate(21);

output.innerHTML += `Tag geändert:<br>${date} <br><br>`;

date.setMonth(2);
output.innerHTML += `Monat geändert:<br> ${date} <br><br>`;

date.setFullYear(2100);
output.innerHTML += ` Jahr geändert<br>${date} <br><br>`;

const date1 = new Date();

date1.setDate(date.getDate() + 30);

output.innerHTML += ` 30 Tage auf das aktuelle Datum drauf:<br>${date1} <br>`;
