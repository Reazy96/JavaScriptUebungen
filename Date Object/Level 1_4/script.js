const date = new Date();

function countDays(jahr, monat) {
  let lala = new Date(jahr, monat, 0).getDate();
  console.log(lala);
}
countDays(2014, 2);

countDays(2024, 2);

countDays(1996, 3);

countDays(2060, 2);
