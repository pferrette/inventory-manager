var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("terms-table-div").appendChild(table);

table.appendChild(thead);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);
headLine.textContent = "Username";

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "Equipament Status";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "Data Status";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Signed Date";

table.appendChild(tbody);

const baseUrl = "http://localhost:5000/";
async function showTerms() {
  const result = await fetch(baseUrl + "terms", {
    method: "GET",
  });
  const data = await result.json();
  const terms = data;

  for (let row = 0; row < terms.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_username = tbrow.insertCell(0);
    cell_username.textContent = Object.values(terms)[row].name;

    cell_equip = tbrow.insertCell(1);
    const equipValue =
      Object.values(terms)[row].is_signed === true || null
        ? "Signed ✅"
        : "Not Signed ❌";
    cell_equip.textContent = equipValue;

    cell_data = tbrow.insertCell(2);
    const dataValue =
      Object.values(terms)[row].data_term_status === true || null
        ? "Signed ✅"
        : "Not signed ❌";
    cell_data.textContent = dataValue;

    cell_date = tbrow.insertCell(3);
    const date = Object.values(terms)[row].signed_date.split("T")[0];
    cell_date.textContent = date;
  }
}
showTerms();
