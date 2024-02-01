function weatherRange() {
  const weatherStatus = document.querySelector("#weather").value;
  const showValue = document.querySelector("p");
  const backgroundclr = document.querySelector("form");
  const levelof1 = document.querySelector(".level1");
  const levelof2 = document.querySelector(".level2");

  if (weatherStatus <= 50) {
    showValue.innerHTML = weatherStatus;
    backgroundclr.style.backgroundColor = "green";
    levelof1.innerHTML = "Level of health concern: Good ";
    levelof2.innerHTML = "Level of health effect: Little or no risk";
  } else if (weatherStatus > 50 && weatherStatus <= 100) {
    showValue.innerHTML = weatherStatus;
    backgroundclr.style.backgroundColor = "yellow";
    levelof1.innerHTML = "Level of health concern: Moderate";
    levelof2.innerHTML = "Level of health effect: Acceptable quality";
  } else if (weatherStatus > 100 && weatherStatus <= 150) {
    showValue.innerHTML = weatherStatus;
    backgroundclr.style.backgroundColor = "orange";
    levelof1.innerHTML =
      "Level of health concern: Unhealthy for snsitive groups";
    levelof2.innerHTML =
      "Level of health effect: Generable publics not likely affected";
  }
}
