function checkDay(check) {
  let date = new Date(check).getDay();

  if (date === 0 || date === 6) {
    return "Wochenende";
  } else {
    return "Arbeitstag";
  }
}

console.log(checkDay("12.15.2019"));
console.log(checkDay("2.16.2001"));
console.log(checkDay("2.1.2020"));
console.log(checkDay("2.29.2020"));


