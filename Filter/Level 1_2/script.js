const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  null,
  "Catwoman",
];
console.log(heros);

const myHeros = heros.filter((realHero) => {
  return realHero;
});

console.log(myHeros);


