let list = [
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

function countMonth(item) {
  let date = new Date(item).getMonth();
  console.log(date);

  console.log(list[date]);
}
countMonth("2001-3-4");
countMonth("2019-12-24");
countMonth("1410-07-15");
