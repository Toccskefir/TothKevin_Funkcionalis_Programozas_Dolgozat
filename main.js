import quotes from './quotes.json';

//Html elements
const buttonAll = document.getElementById("buttonAll");
const buttonThe = document.getElementById("buttonThe");
const buttonLength = document.getElementById("buttonLength");
const inputAmount = document.getElementById("inputAmount");
const div = document.getElementById("div");

//Összes feladat lista
const quotesAll = Array.from(quotes.quotes);
quotesAll.sort((a, b) => {
  if (a.author < b.author) {
    return -1;
  } else if (a.author > b.author) {
    return 1;
  } else {
    return 0;
  }
});

//The feladat lista
const quotesArray = [];
quotes.quotes.forEach(e => quotesArray.push(e.quote));

//Hossz feladat lista
const quotesLength = quotes.quotes.map(quote => { return quote.quote.length });
const quotesLengthString = quotesLength.join(', ');

//Összes feladat gomb
buttonAll.addEventListener("click", () => {
  div.innerHTML = "";
  const ul = document.createElement("ul");
  
  quotesAll.forEach(e => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const q = document.createElement("q");

    p.textContent = e.author;
    q.textContent = e.quote;

    li.appendChild(p);
    li.appendChild(q);
    ul.appendChild(li);
  });

  div.appendChild(ul);
});

//The feladat gomb
buttonThe.addEventListener("click", () => {
  div.innerHTML = "";
  const ol = document.createElement("ol");

  quotesArray.forEach(e => {
    const li = document.createElement("li");
    li.innerHTML = e.replace("The ", "<strong>The </strong>")
                    .replace(" the ", "<strong> the </strong>");
    ol.appendChild(li);
  });

  div.appendChild(ol);
});

//Hossz feladat gomb
buttonLength.addEventListener("click", () => {
  div.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = quotesLengthString;
  div.appendChild(p);
});

//Darabszám feladat
inputAmount.addEventListener("input", () => {
  div.innerHTML = "";
  const inputAuthor = inputAmount.value;
  let number = 0;

  quotesAll.forEach(e => {
    if (e.author == inputAuthor) {
      number++;
    }
  });

  const input = document.createElement("input");
  input.type = "number";
  input.value = number;
  input.readOnly = true;
  div.appendChild(input);
})