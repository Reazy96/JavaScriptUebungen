const text = "Sam is going to codingschool";
const upperCaseText = text.toUpperCase();

document.write(upperCaseText + "<br>");
document.write(text + "<br>");

const indexOfSam = text.indexOf("Sam");
const indexOfCodingschool = text.indexOf("codingschool");

console.log(indexOfSam, indexOfCodingschool);

const mixText1 =
  text.toUpperCase().slice(0, 4) +
  text.slice(4, 15).toLowerCase() +
  text.slice(15).toUpperCase();

document.write(mixText1 + "<br>");

const mixText2 =
  text.toUpperCase().slice(0, 1) +
  text.toLowerCase().slice(1, 4) +
  text.toUpperCase().slice(4, 15) +
  text.toLowerCase().slice(15);
document.write(mixText2 + "<br>");

const mixText3 =
  text.toUpperCase().slice(0, 1) +
  text.toLowerCase().slice(1, 4) +
  text.toUpperCase().slice(4, 5) +
  text.toLowerCase().slice(5, 6) +
  text.toUpperCase().slice(6, 8) +
  text.toLowerCase().slice(8, 12) +
  text.toUpperCase().slice(12, 14) +
  text.toLowerCase().slice(14, 15) +
  text.toUpperCase().slice(15, 17) +
  text.toLowerCase().slice(17);

document.write(mixText3 + "<br>");
