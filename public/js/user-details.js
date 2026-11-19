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
  cc.innerText = "Center Cost: " + data.user.center_cost;
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
  console.log("Device:" + data.device);
  if (data.device == undefined) {
    empty.innerText = "Not assigned 💻";
  } else {
    const deviceId = data.device.id;
    hostname.innerHTML = `<a href="${baseUrl}device/:${deviceId}"> ${data.device.hostname} </a>`;
    model.innerText = "Model: " + data.device.model;
    asset_tag.innerText = "Asset Tag: " + data.device.asset_tag;
    service_tag.innerText = "Service Tag: " + data.device.service_tag;
    express_code.innerText = "Express Code: " + data.device.express_code;

    const warrantyDate = new Date(data.device.warranty);
    warranty.innerText =
      "End Warranty Date: " + warrantyDate.toLocaleDateString();
  }
}

const Mobileempty = document.getElementById("Mobileempty");
const mobileModel = document.getElementById("mobileModel");
const imei = document.getElementById("imei");
const out_of_policy = document.getElementById("out_of_policy");
const payment_status = document.getElementById("payment_status");
const line_number = document.getElementById("line_number");

async function loadMobile(id) {
  const res = await fetch(baseUrl + "api/mobile/" + id, {
    method: "GET",
  });
  const data = await res.json();
  console.log("Mobile:" + data.mobile);
  if (data.mobile == undefined) {
    Mobileempty.innerText = "Not assigned 📱";
  } else {
    mobileModel.innerText = "Model: " + data.mobile.model;
    imei.innerText = "IMEI: " + data.mobile.imei;
    out_of_policy.innerText = "Out of Policy?: " + data.mobile.out_of_policy;
    payment_status.innerText = "Payment Status: " + data.mobile.payment_status;
    line_number.innerText = "Number: " + data.mobile.number;
  }
}

const equip_status = document.getElementById("equip-term-status");
const data_status = document.getElementById("data-term-status");

async function termStatus(id) {
  // line_table.hidden = false;
  const res = await fetch(baseUrl + "api/terms/" + id, {
    method: "GET",
  });
  const data = await res.json();
  const status = data.terms;
  console.log("Term: " + status);
  if (status) {
    status.is_signed === true
      ? (equip_status.innerText = "Equipment Term: Signed 🟢")
      : (equip_status.innerText = "Equipment Term: Not signed 🔴");
    status.data_term_status === true
      ? (data_status.innerText = "Data Term: Signed 🟢")
      : (data_status.innerText = "Data Term: Not signed 🔴");
  } else {
    equip_status.innerText = "Equipment Term: Not signed 🔴";
    data_status.innerText = "Data Term: Not signed 🔴";
  }
}

//const line_table = document.getElementById("line_table");
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
