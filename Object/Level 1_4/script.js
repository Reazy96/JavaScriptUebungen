let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log(unsereHaustiere[0].names);

console.log(unsereHaustiere[1].names);

let newName = (unsereHaustiere[0].names[1] = "Balu");
let newName2 = (unsereHaustiere[0].names[2] = "Snoopy");

let deleteName = unsereHaustiere[0].names.shift();

console.log(unsereHaustiere[0].names);
