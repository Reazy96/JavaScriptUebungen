fetch("https://picsum.photos/v2/list")
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
  .catch((error) => console.error("Error", Error));
