let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

let createOutput = document.createElement("article");
createOutput.style.display = "flex";
createOutput.style.gap = "10px";
document.body.appendChild(createOutput);

myMusic.forEach((singleSong) => {
  createOutput.innerHTML += `
  <div><p>${singleSong.artist}</p>
  <p>${singleSong.title}</p>
  <p>${singleSong.medium}</p></div>
  `;
  console.log(singleSong.medium);
});
