function marker() {
  const input = document.querySelector("#search-input").value;
  const searchWord = document.querySelector("article").innerText;
  console.log(input);
  console.log(searchWord);

  //   dem input ein span mit der class gegeben
  const change = searchWord.replaceAll(
    input,
    (document.innerHTML = `<span class=highlight> ${input} </span>`)
  );

  // dass der neue text mit styling übernommen wird

  document.querySelector("article").innerHTML = change;
}
