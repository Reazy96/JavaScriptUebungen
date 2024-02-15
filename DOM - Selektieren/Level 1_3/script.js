let buttons = document.querySelectorAll("button");

let myListUl = document.body.children[0];
//? ich selektiere mir das erste children vom Body. Also meine <ul>

const output = document.querySelector(".my-output");

buttons.forEach((singleButton, indexForAll) => {
  singleButton.addEventListener("click", () => {
    //! console.log(index); -> hinter indexForAll als zweiter Parameter verbirgt sich eine Zahl. dh. jedes singleButton bekommt eine eigene Nummer
    if (indexForAll === 0) {
      output.innerHTML = myListUl.firstElementChild.textContent;
    } else if (indexForAll === 1) {
      output.innerHTML = myListUl.lastElementChild.textContent;
    } else if (indexForAll === 2) {
      output.innerHTML = myListUl.firstElementChild.nextElementSibling.textContent;
    } else if (indexForAll === 3) {
      output.innerHTML = myListUl.lastElementChild.previousElementSibling.textContent;
      // - ich will mir als output den jeweiligen textContent von der <ul> anzeigen lassen z.B firstElementChild usw.
    }
  });
});
