var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("div_device").appendChild(table);

table.appendChild(thead);

//---------------- head
var trow = document.createElement("tr");
thead.appendChild(trow);

var headLine = document.createElement("th");
trow.appendChild(headLine);
headLine.textContent = "ID";

var headLine2 = document.createElement("th");
trow.appendChild(headLine2);
headLine2.textContent = "User";

var headLine3 = document.createElement("th");
trow.appendChild(headLine3);
headLine3.innerHTML = "Hostname";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "AssetTag";

var headLine5 = document.createElement("th");
trow.appendChild(headLine5);
headLine5.innerHTML = "Model";

var headLine6 = document.createElement("th");
trow.appendChild(headLine6);
headLine6.innerHTML = "ServiceTag";

var headLine7 = document.createElement("th");
trow.appendChild(headLine7);
headLine7.innerHTML = "ExpressCode";

var headLine8 = document.createElement("th");
trow.appendChild(headLine8);
headLine8.innerHTML = "Warranty";

var headLine9 = document.createElement("th");
trow.appendChild(headLine9);
headLine9.innerHTML = "Comments";

table.appendChild(tbody);
var tbrow = table.insertRow(1);
tbody.appendChild(tbrow);

const baseUrl = "http://localhost:5000/";
document.getElementById("btnDevice").addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(baseUrl + "deviceInfo", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  var devices = data.device;
  for (let row = 0; row < devices.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_ID = tbrow.insertCell(0);
    cell_ID.textContent = Object.values(devices)[row].Id;

    cell_User = tbrow.insertCell(1);
    cell_User.textContent = Object.values(devices)[row].User;

    cell_Hostname = tbrow.insertCell(2);
    cell_Hostname.textContent = Object.values(devices)[row].Hostname;

    cell_AssetTag = tbrow.insertCell(3);
    cell_AssetTag.textContent = Object.values(devices)[row].AssetTag;

    cell_Model = tbrow.insertCell(4);
    cell_Model.textContent = Object.values(devices)[row].Model;

    cell_ServiceTag = tbrow.insertCell(5);
    cell_ServiceTag.textContent = Object.values(devices)[row].ServiceTag;

    cell_ExpressCode = tbrow.insertCell(6);
    cell_ExpressCode.textContent = Object.values(devices)[row].ExpressCode;

    cell_Warranty = tbrow.insertCell(7);
    cell_Warranty.textContent = Object.values(devices)[row].Warranty;

    cell_Comments = tbrow.insertCell(8);
    cell_Comments.textContent = Object.values(devices)[row].Comments;
  }
});

//Row Click
table.addEventListener("click", function (event) {
  const row = event.target.closest("tr");

  if (!row) return;

  // ident = row.cells[0].innerText;

  // document.getElementById("lblId").innerText = "ID: " + ident;
  // btnUpdate.disabled = false;

  // inputName.value = row.cells[1].innerText;
  // inputCC.value = row.cells[2].innerText;
  // inputEmail.value = row.cells[3].innerText;
});
