var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

document.getElementById("user_table").appendChild(table);

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
const baseUrl = "http://localhost:5000/";
// document.getElementById("btnUser").addEventListener("click", async (e) => {
//   e.preventDefault();
//   const res = await fetch(baseUrl + "userInfo", {
//     method: "GET",
//   });
//   const data = await res.json();
//   console.log(data);
//   var users = data.user;
//   for (let row = 0; row < users.length; row++) {
//     tbrow = table.insertRow(row);
//     tbody.appendChild(tbrow);

//     cell_ID = tbrow.insertCell(0);
//     cell_ID.textContent = Object.values(users)[row].id;

//     cell_Name = tbrow.insertCell(1);
//     cell_Name.textContent = Object.values(users)[row].name;

//     cell_CC = tbrow.insertCell(2);
//     cell_CC.textContent = Object.values(users)[row].center_cost;

//     cell_Email = tbrow.insertCell(3);
//     cell_Email.textContent = Object.values(users)[row].email;
//   }
// });

async function refreshTable() {
  const res = await fetch(baseUrl + "userInfo", {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  var users = data.user;
  for (let row = 0; row < users.length; row++) {
    tbrow = table.insertRow(row);
    tbody.appendChild(tbrow);

    cell_ID = tbrow.insertCell(0);
    const id = Object.values(users)[row].id;
    cell_ID.innerHTML = `<a href="http://localhost:5000/users/${id}">${id}</a>`;

    cell_Name = tbrow.insertCell(1);
    cell_Name.textContent = Object.values(users)[row].name;

    cell_CC = tbrow.insertCell(2);
    cell_CC.textContent = Object.values(users)[row].center_cost;

    cell_Email = tbrow.insertCell(3);
    cell_Email.textContent = Object.values(users)[row].email;
  }
}

const inputName = document.getElementById("inputName");
const inputCC = document.getElementById("inputCC");
const inputEmail = document.getElementById("inputEmail");

// document.getElementById("btnPostUser").addEventListener("click", async (e) => {
//   e.preventDefault();

//   const res = await fetch(baseUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name: inputName.value,
//       cc: inputCC.value,
//       email: inputEmail.value,
//     }),
//   });
// });

// let id;
// let user_id;
// table.addEventListener("click", function (event) {
//   const row = event.target.closest("tr");

//   if (!row) return;

//   user_id = row.cells[0].innerText;

//   document.getElementById("lblId").innerText = "ID: " + user_id;
//   btnUpdate.disabled = false;

//   inputName.value = row.cells[1].innerText;
//   inputCC.value = row.cells[2].innerText;
//   inputEmail.value = row.cells[3].innerText;
// });

// const btnUpdate = document.getElementById("btnUpdateUser");

// btnUpdate.disabled = true;
// btnUpdate.addEventListener("click", async (e) => {
//   e.preventDefault();

//   const res = await fetch(`${baseUrl}userInfo/${user_id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: inputName.value,
//       cc: inputCC.value,
//       email: inputEmail.value,
//     }),
//   });
// });

// document
//   .getElementById("btnDeleteUser")
//   .addEventListener("click", async (e) => {
//     e.preventDefault();

//     const res = await fetch(`${baseUrl}userInfo/${user_id}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     });
//   });

const div_user = document.getElementById("div_user");
const addButton = document.getElementById("plusBtn");
const createUser = document.getElementById("createUser");

addButton.addEventListener("click", async (e) => {
  e.preventDefault();
  div_user.hidden = false;
});

async function newUser() {
  await fetch(baseUrl + "user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: inputName.value,
      center_cost: inputCC.value,
      email: inputEmail.value,
    }),
  });
}

createUser.addEventListener("click", async (e) => {
  if (!inputName.value || !inputCC.value || !inputEmail.value) {
    window.alert("Invalid input");
    e.preventDefault();
  } else {
    newUser();
    window.alert("User Created");
    location.reload();
  }
});

refreshTable();
