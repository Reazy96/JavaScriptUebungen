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

person.push("homebody", "love music");

console.table(person);

friends.push("JeremyFragrance", "Olaf Scholz");

console.table(friends);

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
