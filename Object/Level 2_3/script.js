const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

let myDiv = document.querySelector("#table-container");

singers.forEach((singleSinger) => {
  myDiv.innerHTML += `<table> 
  <thead>
  <tr>
    <th>Name</th>
    <th>Country</th>
    <th>Start-End</th>
    <th>Genre</th>
  
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>${singleSinger.name}</td>
  <td>${singleSinger.country}</td>
  <td>${singleSinger.period_active.start} - ${singleSinger.period_active.end} </td>
  <td>${singleSinger.genre}</td> 
  </tr>
  </tbody>

  
  </table>`;
  console.log(singleSinger.period_active.start);
});
