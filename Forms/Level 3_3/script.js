function changeBackground() {
  // Variablen für die values der Input-Felder festlegen:
  const bgRot = document.querySelector("#rot").value;
  const bgGruen = document.querySelector("#gruen").value;
  const bgBlau = document.querySelector("#blau").value;

  // Variable für body-wrapper festlegen:
  const wrapper = document.querySelector(".wrapper");

  // Hintergrundfarbe für den wrapper stylen, sodass sie sich aus den values der drei input-Felder zusammensetzt, die dann über den range-Regler geändert werden kann:
  wrapper.style.backgroundColor =
    "rgb(" + bgRot + "," + bgGruen + "," + bgBlau + ")";
}
