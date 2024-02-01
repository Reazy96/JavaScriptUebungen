function showtxt() {
  let postInfo = document.querySelector("#mylist").value;
  let größeGewicht = document.querySelector("b");
  let mahsse = document.querySelector("#masse");

  switch (postInfo) {
    case "0":
      größeGewicht.innerHTML = "Brief und Postkarte";
      mahsse.innerHTML = "L: 10 - 23,5 cm" + "B: 7 - 12,5 cm" + "H: bis 1 cm";
      break;
    case "1":
      größeGewicht.innerHTML = "DHL Paket 2 kg";
      mahsse.innerHTML = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      größeGewicht.innerHTML = "DHL Paket 5 kg";
      mahsse.innerHTML = "bis 120 x 60 x 60 cm";
      break;
    case "3":
      größeGewicht.innerHTML = "DHL Paket 10 kg";
      mahsse.innerHTML = "bis 120 x 60 x 60 cm";
    default:
      größeGewicht.innerHTML = "Extra große Größe";
      mahsse.innerHTML = "";
  }
}
