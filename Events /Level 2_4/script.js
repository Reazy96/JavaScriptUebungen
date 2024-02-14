const selectMenu = document.querySelector("#farbeAuswahlen");
const removeBtn = document.querySelector("#button");
let putIndex = 0;

selectMenu.addEventListener("change", () => {
  putIndex = selectMenu.selectedIndex;
  console.log(putIndex);
});

removeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  selectMenu.remove(putIndex);
});
