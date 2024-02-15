// ! Variante 1

//- const colorChangeButton = document.querySelector("#button"); <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- Variable mit dem Button verbinden

//- colorChangeButton.addEventListener("click", () => {<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- auf den Button ein click EventListener
//- const colorSelect = document.querySelector("#farbeAuswahlen").value;<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-- Variable die , die farben als value ausliest
//- document.querySelector("body").style.backgroundColor = colorSelect.replace(" ", "").toLowerCase();<<-- den body gestyled mit der variable die, die farben als value enthält und nurnoch den text bearbeitet. zB. mit replace die spaces entfert
//- });

// ##########################################################################

// ! Variante 2
const selectMenu = document.querySelector("#farbeAuswahlen");

const colorChangeButton = document.querySelector("#button");

colorChangeButton.addEventListener("click", (event) => {
  event.preventDefault();

  let putIndex = selectMenu.selectedIndex;
  let options = selectMenu.options;

  let optionsIndex = options[putIndex].text;
  let newOptionsIndex = optionsIndex.replace(" ", "");
  document.body.style.backgroundColor = newOptionsIndex;
});

// ##########################################################################

// ! Variante 3

//?  const colorChangeButton = document.querySelector("#button");

//? const bgColorSwitch = () => {
//?   const colorSelection = document.querySelector("#farbeAuswahlen").selectedIndex;

//?   const selectedColor = document.querySelector("#farbeAuswahlen")[colorSelection].innerText;
//?   const deleteSpace = selectedColor.replace(" ", "");
//?   document.body.style.backgroundColor = deleteSpace;
//? };

//? button.addEventListener("click", bgColorSwitch);
