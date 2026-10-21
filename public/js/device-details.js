const baseUrl = "http://localhost:5000/";

const deviceId = window.location.pathname.split("/").pop();

const hostnameHeader = document.getElementById("hostnameHeader");
const user = document.getElementById("user");
const deviceModel = document.getElementById("deviceModel");
const asset_tag = document.getElementById("asset_tag");
const service_tag = document.getElementById("service_tag");
const express_code = document.getElementById("express_code");
const comments = document.getElementById("comments");
const warranty_date = document.getElementById("warranty_date");
const warranty_status = document.getElementById("warranty_status");
// const days_left = document.getElementById("days_left");

async function loadInfo(id) {
  const res = await fetch(baseUrl + "devices/" + id, {
    method: "GET",
  });
  const data = await res.json();
  hostnameHeader.innerText = data.device.hostname;
  user.setAttribute(
    "href",
    "http://localhost:5000/users/" + data.device.user_id,
  );
  user.innerText = data.device.name;
  deviceModel.innerText += data.device.model;
  asset_tag.innerText += data.device.asset_tag;
  service_tag.innerText += data.device.service_tag;
  express_code.innerText += data.device.express_code;
  comments.innerText += data.device.comments;

  const warrantyDate = new Date(data.device.warranty);
  const now = new Date();

  const diffMs = warrantyDate - now < 0 ? " 🔴 Over" : " 🟢 On";
  warranty_date.innerText += warrantyDate.toLocaleDateString("pt-br");
  warranty_status.innerText += diffMs;
}

loadInfo(deviceId);
