function checkDay(check) {
  let date = new Date(check).getDay();
  console.log(date);

  if (date === 0 || date === 6) {
    console.log("Wochenende");
  } else {
    console.log("Arbeitstag");
  }
}
checkDay("12.15.2019");
