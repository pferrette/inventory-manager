var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("div_tb_last_change").appendChild(table);

table.appendChild(thead);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);
headLine.textContent = "From";

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "To";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "STERIS Tag";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Service Tag";

var headLine5 = document.createElement("th");
trow.appendChild(headLine5);
headLine5.innerHTML = "CC";

table.appendChild(tbody);

const baseUrl = "http://localhost:5000/";
async function showLastChange() {
  const result = await fetch(baseUrl + "changes", {
    method: "GET",
  });
  const data = await result.json();
  const lastChange = data.last;

  for (let row = 0; row < lastChange.length; row++) {
    console.log(row);

    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_from = tbrow.insertCell(0);
    cell_from.textContent = Object.values(lastChange)[row].from_user_name;
    console.log(Object.values(lastChange)[row].from_user_name);

    cell_to = tbrow.insertCell(1);
    cell_to.textContent = Object.values(lastChange)[row].to_user_name;

    cell_asset = tbrow.insertCell(2);
    cell_asset.textContent = Object.values(lastChange)[row].asset_tag;

    cell_service_tag = tbrow.insertCell(3);
    cell_service_tag.textContent = Object.values(lastChange)[row].service_tag;

    cell_cc = tbrow.insertCell(4);
    cell_cc.textContent = Object.values(lastChange)[row].cc;
  }
}
showLastChange();
