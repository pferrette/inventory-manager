const baseUrl = "http://localhost:5000/";

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("lines-table").appendChild(table);

table.appendChild(thead);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);
headLine.textContent = "Number";

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "Type";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "Is used";

table.appendChild(tbody);

async function loadLines() {
  const result = await fetch(baseUrl + "lines", {
    method: "GET",
  });
  const data = await result.json();
  const lines = data.lines;
  //   return data;

  for (let row = 0; row < lines.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_from = tbrow.insertCell(0);
    cell_from.textContent = Object.values(lines)[row].number;

    cell_to = tbrow.insertCell(1);
    cell_to.textContent = Object.values(lines)[row].type;

    cell_asset = tbrow.insertCell(2);
    const used = Object.values(lines)[row].is_using;
    cell_asset.textContent = used === true ? "Used 🔵" : "Free ⚪";
  }
}

loadLines();
