function PmOrAm(date) {
  let date0 = date.getHours();
  console.log(date0);
  console.log(date);

  if (date0 >= 12) {
    console.log("pm");
  } else {
    console.log("am");
  }
}

let date1 = new Date(1999, 10, 5, 15);
PmOrAm(date1);

let date2 = new Date(2000, 1, 1, 11);
PmOrAm(date2);

let date4 = new Date();
PmOrAm(date4);

date5 = new Date(2019, 12, 3, 12);
PmOrAm(date5);
