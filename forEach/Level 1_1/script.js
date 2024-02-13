let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];
 // ⬇ eine Funktion geöffnet und in den Klammern der Funktion einen 
  //     ⬇
const myDrinks = (drinks) => {
  drinks.sort().forEach((drink) => document.write(drink + "<br>"));
};

myDrinks(getraenke);
