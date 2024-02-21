function standard() {
  let moreBtn = document.querySelector(".loadbtn");

  moreBtn.addEventListener("click", () => {
    let randomNr = Math.floor(Math.random() * 10);
    console.log(randomNr);

    fetch(`https://picsum.photos/v2/list?page=${randomNr}&limit=5`)
      .then((resp) => resp.json())
      .then((allData) => {
        allData.forEach((singleData) => {
          let myDiv = document.createElement("div");

          let myImg = document.createElement("img");
          myImg.setAttribute("src", singleData.download_url);

          myDiv.appendChild(myImg);

          let headline = document.createElement("h2");
          headline.textContent = singleData.author;
          myDiv.appendChild(headline);

          let myBtn = document.createElement("button");
          myBtn.textContent = "see more";
          myDiv.appendChild(myBtn);

          document.querySelector(".box").appendChild(myDiv);

          myBtn.addEventListener("click", () => {
            window.open(singleData.url);
          });
        });
      })
      .catch((error) => console.error("Error", error));
  });
}

standard();
