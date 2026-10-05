var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("table-mobile-div").appendChild(table);

table.appendChild(thead);

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
headLine3.innerHTML = "IMEI";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Model";

var headLine5 = document.createElement("th");
trow.appendChild(headLine5);
headLine5.innerHTML = "Number";

var headLine6 = document.createElement("th");
trow.appendChild(headLine6);
headLine6.innerHTML = "Payment Status";

var headLine7 = document.createElement("th");
trow.appendChild(headLine7);
headLine7.innerHTML = "Tranche Price";

var headLine8 = document.createElement("th");
trow.appendChild(headLine8);
headLine8.innerHTML = "Buy Date";

table.appendChild(tbody);

const baseUrl = "http://localhost:5000/";
async function showMobiles() {
  const result = await fetch(baseUrl + "mobiles", {
    method: "GET",
  });
  const data = await result.json();
  const mobiles = data;
  console.log(mobiles);

  for (let row = 0; row < mobiles.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_mId = tbrow.insertCell(0);
    cell_mId.textContent = Object.values(mobiles)[row].id;

    cell_name = tbrow.insertCell(1);
    cell_name.textContent = Object.values(mobiles)[row].name;

    cell_imei = tbrow.insertCell(2);
    cell_imei.textContent = Object.values(mobiles)[row].imei;

    cell_model = tbrow.insertCell(3);
    cell_model.textContent = Object.values(mobiles)[row].model;

    cell_line = tbrow.insertCell(4);
    cell_line.textContent = Object.values(mobiles)[row].line_number;

    cell_buy = tbrow.insertCell(5);
    cell_buy.textContent = Object.values(mobiles)[row].buy_date;

    cell_tranche = tbrow.insertCell(6);
    cell_tranche.textContent = Object.values(mobiles)[row].trache_price;

    cell_payment_status = tbrow.insertCell(7);
    cell_payment_status.textContent =
      Object.values(mobiles)[row].payment_status;
  }
}
showMobiles();
