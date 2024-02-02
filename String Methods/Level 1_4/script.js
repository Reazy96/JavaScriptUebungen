// ich erstelle eine Variable mit einem String-Text den ich dann mit .slice teilen möchte.

const A = "Susi is going to codingschool";

// ich erstelle jetzt die Variablen in der die verschiedenen slices sind.
// mit .concat kann ich zwei slices verbinden.
const susi1 = A.slice(0, 4);
const susi2 = A.slice(5, 7);
const susi3 = A.slice(5, 17).concat(A.slice(23, 29));
const susi4 = A.slice(23, 29);
const susi5 = A.slice(0, 8).concat(A.slice(23, 29));

// jetzt brauche ich eine Variable die mit meinem p-Tag verbunden ist.

const pTag = document.querySelector(".susi-html");

// hier rufe ich jetzt mein p-tag als Variable auf und sage ihm dass er per .innerHTML die gesliceten Variablen einfügt.

pTag.innerHTML += susi1 + "<br>";
pTag.innerHTML += susi2 + "<br>";
pTag.innerHTML += susi3 + "<br>";
pTag.innerHTML += susi4 + "<br>";
pTag.innerHTML += susi5 + "<br>";
