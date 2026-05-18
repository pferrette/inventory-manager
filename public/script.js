var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("div_user").appendChild(table);

table.appendChild(thead);
// table.appendChild(tbody);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);
headLine.textContent = "ID";

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "Name";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "CC";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Email";

//--------------- line body 1
var tbrow = table.insertRow(1);

//--------td
var cell = tbrow.insertCell(0);
var nextCell = " ";

// ------ connection to server
const baseUrl = "http://localhost:5000/info";
document.getElementById("btnUser").addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  console.log(res);
  const data = await res.json();
  // console.log(Object.values(data.info)[0]);
  console.log(data.info);

  for (let row = 0; row < 4; row++) {
    tbrow = table.insertRow(row);
    for (let col = 0; col < 4; col++) {
      cell = tbrow.insertCell(col);
      cell.textContent = Object.values(data.info[col])[col];

      // cell.textContent = Object.values(data.info)[col].ID;
      // cell2.textContent = Object.values(data.info)[col].Name;
      // cell3.textContent = Object.values(data.info)[col].CenterCost;
      // cell4.textContent = Object.values(data.info)[col].Email;
    }
  }
});
