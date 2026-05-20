var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("div_user").appendChild(table);

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
headLine3.innerHTML = "CC";

var headLine4 = document.createElement("th");
trow.appendChild(headLine4);
headLine4.innerHTML = "Email";

//--------------- line body 1
table.appendChild(tbody);
var tbrow = table.insertRow(1);
tbody.appendChild(tbrow);

// ------ connection to server
const baseUrl = "http://localhost:5000/userInfo";
document.getElementById("btnUser").addEventListener("click", async (e) => {
  e.preventDefault();
  const res = await fetch(baseUrl, {
    method: "GET",
  });
  //console.log(res);
  const data = await res.json();

  var users = data.user;
  for (let row = 0; row < users.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_ID = tbrow.insertCell(0);
    cell_ID.textContent = Object.values(users)[row].ID;

    cell_Name = tbrow.insertCell(1);
    cell_Name.textContent = Object.values(users)[row].Name;

    cell_CC = tbrow.insertCell(2);
    cell_CC.textContent = Object.values(users)[row].CenterCost;

    cell_Email = tbrow.insertCell(3);
    cell_Email.textContent = Object.values(users)[row].Email;
  }
});

/*TODO:
- WORK ON POST method
  - CREATE HTML FORM
*/
