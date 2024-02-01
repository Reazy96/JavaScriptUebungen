function checkPw() {
  let password = document.querySelector("#password").value;
  let saveOrNot = document.querySelector("h5");

  password.length > 8
    ? (saveOrNot.innerHTML = "save")
    : (saveOrNot.innerHTML = "Not save");
}
