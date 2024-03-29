const steuerBerechnen = () => {
  let mwst = document.querySelector("input[name='nettobrutto']:checked").value;
  let percent = document.querySelector(
    "input[name='prozentsatz']:checked"
  ).value;
  let input = Number(document.querySelector(".meinBetrag").value);
  let output = document.querySelector(".outputmwst");
  let output2 = document.querySelector(".endpreis");

  if (mwst === "nettoZuBrutto" && percent === "satz19") {
    output.innerHTML = `${(input * 0.19).toFixed(2)}`;
    output2.innerHTML = (input + input * 0.19).toFixed(2);
  } else if (mwst === "nettoZuBrutto" && percent === "satz7") {
    output.innerHTML = `${(input * 0.07).toFixed(2)}`;
    output2.innerHTML = (input + input * 0.07).toFixed(2);
  } else if (mwst === "bruttoZuNetto" && percent === "satz19") {
    output.innerHTML = (input - input / (1 + 0.19)).toFixed(2);
    output2.innerHTML = `${(input / (1 + 0.19)).toFixed(2)} `;
  } else if (mwst === "bruttoZuNetto" && percent === "satz7") {
    output.innerHTML = (input - input / (1 + 0.07)).toFixed(2);
    output2.innerHTML = `${(input / (1 + 0.07)).toFixed(2)} `;
  }
};
steuerBerechnen();

// Funktion 2 :

const nettoBruttotxt = document.querySelector(".betrag p");
const nettoBruttotxt2 = document.querySelector(".output .outputJS");

const changeTxt = () => {
  let bruttoNetto = document.querySelector(
    'input[name="nettobrutto"]:checked'
  ).value;

  nettoBruttotxt.innerHTML =
    bruttoNetto == "nettoZuBrutto"
      ? "Nettobetrag <br> (Preis ohne Mwst.) <br> in Euro*"
      : "Bruttobetrag <br> (Preis inklusive Mwst.) <br> in Euro*";

  nettoBruttotxt2.innerHTML =
    bruttoNetto == "nettoZuBrutto" ? "Bruttobetrag (Endpreis)" : "Nettobetrag";
};
