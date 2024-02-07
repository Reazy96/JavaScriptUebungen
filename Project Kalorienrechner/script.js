const kalorienrechner = () => {
  const heightInput = Number(document.querySelector("#groesse").value);
  const ageInput = Number(document.querySelector("#alter").value);
  const weightInput = Number(document.querySelector("#gewicht").value);
  // -------------------------------------------------------------------------------------
  // ⬇  Variable für das Radio. Wichtig:

  // ⬇  1. Radios haben den selben Namen,
  // ⬇  2. eines der Radios muss gecheckt sein
  // ⬇  3. ändere den value so dass du daraus eine if/else Bedingung machen kannst

  const gender = document.querySelector("input[name='geschlecht']:checked").value;
  // -------------------------------------------------------------------------------------

  const palFactor = Number(document.querySelector("#pal-faktor").value);
  const grundKcal = document.querySelector(".grund-kcal");
  const grundKj = document.querySelector(".grund-kj");
  const gesamtKcal = document.querySelector(".gesamt-kcal");
  const gesamtKj = document.querySelector(".gesamt-kj");

  if (gender === "frau") {
    // ⬇ grund frau kcal ⬇
    let grundFrauK = (655.1 + 9.6 * weightInput + 1.8 * heightInput - 4.7 * ageInput).toFixed(2);
    grundKcal.innerHTML = grundFrauK;

    // ⬇ gesamt frau kcal ⬇
    let gesamtFrauK = (grundFrauK * palFactor).toFixed(2);
    gesamtKcal.innerHTML = gesamtFrauK;

    // ⬇ grund frau kJ ⬇
    let grundFrauJ = (grundFrauK * 4.1868).toFixed(2);
    grundKj.innerHTML = grundFrauJ;

    //  ⬇ gesamt frau kJ ⬇
    let gesamtFrauJ = (grundFrauJ * palFactor).toFixed(2);
    gesamtKj.innerHTML = gesamtFrauJ;
    // -----------------------------------------------------
  } else if (gender === "mann") {
    // ⬇ grund mann kcal ⬇
    let grundMannK = (66.47 + 13.7 * weightInput + 5 * heightInput - 6.8 * ageInput).toFixed(2);
    grundKcal.innerHTML = grundMannK;

    // ⬇ gesamt mann kcal ⬇
    let gesamtMannK = (grundMannK * palFactor).toFixed(2);
    gesamtKcal.innerHTML = gesamtMannK;

    // ⬇ grund mann kJ ⬇
    let grundMannJ = (grundMannK * 4.1868).toFixed(2);
    grundKj.innerHTML = grundMannJ;

    // ⬇ gesamt mann kJ ⬇
    let gesamtMannJ = (grundMannJ * palFactor).toFixed(2);
    gesamtKj.innerHTML = gesamtMannJ;
  }
};
