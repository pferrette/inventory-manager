const userName = document.getElementById("name");
const cc = document.getElementById("cc");
const email = document.getElementById("email");

const userId = window.location.pathname.split("/").pop();
const baseUrl = "http://localhost:5000/";
async function loadUser(id) {
  const res = await fetch(baseUrl + "api/user/" + id, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data.user);
  userName.innerText = data.user.name;
  cc.innerText = data.user.center_cost;
  email.innerText = data.user.email;
}

const hostname = document.getElementById("hostname");
const model = document.getElementById("model");
const asset_tag = document.getElementById("asset_tag");
const service_tag = document.getElementById("service_tag");
const express_code = document.getElementById("express_code");
const warranty = document.getElementById("warranty");
const empty = document.getElementById("empty");

async function loadDevice(id) {
  const res = await fetch(baseUrl + "api/device/" + id, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data.device);
  if (data.device == undefined) {
    empty.innerText = "Not assigned 💻";
  } else {
    hostname.innerText = data.device.hostname;
    model.innerText = data.device.model;
    asset_tag.innerText = data.device.asset_tag;
    service_tag.innerText = data.device.service_tag;
    express_code.innerText = data.device.express_code;
    warranty.innerText = data.device.warranty;
  }
}

const Mobileempty = document.getElementById("Mobileempty");
const mobileModel = document.getElementById("mobileModel");
const imei = document.getElementById("imei");
const out_of_policy = document.getElementById("out_of_policy");
const payment_status = document.getElementById("payment_status");

async function loadMobile(id) {
  const res = await fetch(baseUrl + "api/mobile/" + id, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data.mobile);
  if (data.mobile == undefined) {
    Mobileempty.innerText = "Not assigned 📱";
  } else {
    mobileModel.innerText = data.mobile.model;
    imei.innerText = data.mobile.imei;
    out_of_policy.innerText = data.mobile.out_of_policy;
    payment_status.innerText = data.mobile.payment_status;
  }
}

const equip_status = document.getElementById("equip-term-status");
const data_status = document.getElementById("data-term-status");
async function termStatus(id) {
  line_table.hidden = false;
  const res = await fetch(baseUrl + "api/terms/" + id, {
    method: "GET",
  });
  const data = await res.json();
  const status = data.terms;
  console.log(status);
  status.is_signed === true
    ? (equip_status.innerText = "Equipment Term: Signed 🟢")
    : (equip_status.innerText = "Equipment Term: Not signed 🔴");
  status.data_term_status === true
    ? (data_status.innerText = "Data Term: Signed 🟢")
    : (data_status.innerText = "Data Term: Not signed 🔴");
}

const line_table = document.getElementById("line_table");
// async function loadLines(id) {
//   const res = await fetch(baseUrl + "api/lines/" + id, {
//     method: "GET",
//   });
//   const data = await res.json();
//   console.log(data.lines);
// }

loadUser(userId);
loadDevice(userId);
loadMobile(userId);
termStatus(userId);
// loadLines(userId);
