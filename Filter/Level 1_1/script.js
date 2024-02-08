const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

console.log(woerter);

const onlyShort = woerter.filter((shortWord) => {
  return shortWord.length <= 6;
});

console.log(onlyShort);
