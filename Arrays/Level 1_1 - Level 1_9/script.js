// Level 1_1
console.log("%c-----------------Level 1_1-----------------", "color: yellow");
const person = ["albanian", "27yrs", "gamer"];
const friends = ["GubiFortnite", "NiekBeats", "SowiFortnite"];
const favoriteFood = ["Reis mit Chicken", "Sushi", "Kuchen"];

console.log(person, friends, favoriteFood);

console.table(person);
console.table(friends);
console.table(favoriteFood);

// Level 1_2
console.log("%c-----------------Level 1_2-----------------", "color: yellow");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log("-------------");
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log("-------------");
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// Level 1_3

console.log("%c-----------------Level 1_3-----------------", "color: yellow");
console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

console.log("%c-----------------Level 1_4-----------------", "color: yellow");
console.log(person);
person.push("homebody", "love music");
console.table(person);
console.log("-------------");
console.log(friends);
friends.push("JeremyFragrance", "Olaf Scholz");
console.table(friends);
console.log("-------------");
console.log(favoriteFood);
favoriteFood.push("Baklava", "RedBull");
console.table(favoriteFood);

console.log("%c-----------------Level 1_5-----------------", "color: yellow");
console.log(person);
person.pop();
person.pop();
console.log(person);
console.log("-------------");
console.log(friends);
friends.pop();
friends.pop();
console.log(friends);
console.log("-------------");
console.log(favoriteFood);
favoriteFood.pop();
favoriteFood.pop();
console.log(favoriteFood);

console.log("%c-----------------Level 1_7-----------------", "color: yellow");

console.log(person);
person.unshift("homebody", "love music");
console.table(person);
console.log("-------------");
console.log(friends);
friends.unshift("JeremyFragrance", "Olaf Scholz");
console.table(friends);
console.log("-------------");
console.log(favoriteFood);
favoriteFood.unshift("Baklava", "RedBull");
console.table(favoriteFood);

console.log("%c-----------------Level 1_8-----------------", "color: yellow");

// Variable erstellen mit 3 Werten
const array = [23, 54, 75];
console.log(array);
// hinten hinzufügen
array.push(11, 32, 42, 5, 71);
console.log(array);
// vorne hinzufügen
array.unshift(1, 3, 7, 8, 14);
console.log(array);
// 2x hinteren Wert entfernen
array.pop();
array.pop();
console.log(array);
// 2x vorderen Wert entfernen
array.shift();
array.shift();
console.log(array);
