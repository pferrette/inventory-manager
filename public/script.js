var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("div_user").appendChild(table);

table.appendChild(thead);
table.appendChild(tbody);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "Valor2";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "Valor3";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Valor4";

//--------------- line body 1
var tbrow = document.createElement("tr");
tbody.appendChild(tbrow);

//--------td
var datalineLine = document.createElement("td");
tbrow.appendChild(datalineLine);
datalineLine.innerHTML = "data1";

//--------td
var datalineLine2 = document.createElement("td");
tbrow.appendChild(datalineLine2);
datalineLine2.innerHTML = "data2";

//--------td
var datalineLine3 = document.createElement("td");
tbrow.appendChild(datalineLine3);
datalineLine3.innerHTML = "data3";

//--------td
var datalineLine4 = document.createElement("td");
tbrow.appendChild(datalineLine4);
datalineLine4.innerHTML = "data4";

// ------ connection to server
const baseUrl = "http://localhost:5000/info";
document.getElementById("btnUser").addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  console.log(res);
  const data = await res.json();
  headLine.textContent = data.info;
});
