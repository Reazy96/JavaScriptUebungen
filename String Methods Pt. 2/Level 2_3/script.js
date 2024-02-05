function marker() {
  const input = document.querySelector("#search-input").value;
  const searchWord = document.querySelector("article").innerText;
  console.log(input);
  console.log(searchWord);

  //    mit "replaceAll" suche ich mein input im Text und gebe ihn mit "innerHTML"
  //                                                  ein span mit einer class
  const change = searchWord.replaceAll(
    input,
    (document.innerHTML = `<span class=highlight> ${input} </span>`)
  );

  // hier sage ich dass der komplette Text mit Styling übernommen wird

  document.querySelector("article").innerHTML = change;
}
