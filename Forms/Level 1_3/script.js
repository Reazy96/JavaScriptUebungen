function noRefreshing(event) {
  event.preventDefault();

  let year1 = document.querySelector("#number1").value;
  let year2 = document.querySelector("#number2").value;
  let difference = year1 - year2;
  console.log(difference);
  const putInHtml = document.querySelector(".result");

  putInHtml.innerHTML += difference;
}
