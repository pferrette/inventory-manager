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

var actualUser;
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
  actualUser = data.device.user_id;
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

  comment_text.value = data.device.comments;
}

const comment_area = document.getElementById("comment-div");
const commentBtn = document.getElementById("commentBtn");
const comment_text = document.getElementById("device-comment");

const change_user = document.getElementById("change-user-div");
const change_button = document.getElementById("btn-change-user");
const change_text = document.getElementById("txt-new-user");
const check_name = document.getElementById("btn-check");

const save_button = document.getElementById("btn-save");

commentBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  comment_area.hidden = false;
  save_button.hidden = false;
  change_user.hidden = true;
});

change_button.addEventListener("click", async (e) => {
  e.preventDefault();
  change_user.hidden = false;
  comment_area.hidden = true;
  save_button.hidden = false;
});

save_button.addEventListener("click", async (e) => {
  const comment_value = comment_text.value;
  // if (comment_value) {
  //   console.log(comment_value);
  //   patchComment(comment_value, deviceId);
  //   window.alert("Comment saved! The Page will reload.");
  //   location.reload();
  // }
  if (change_text.value) {
    patchDevice();
    window.alert("User changed! The Page will reload.");
    location.reload();
  }
});

async function patchComment(commentValue, device_id) {
  const result = await fetch(baseUrl + "device/comment/" + device_id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: device_id,
      comment: commentValue,
    }),
  });
  console.log(result);
  return result;
}

check_name.addEventListener("click", async (e) => {
  e.preventDefault();
  findUserByName(change_text.value);
});

var toUserId;
async function findUserByName(username) {
  const result = await fetch(
    baseUrl + "api/username/" + encodeURIComponent(username),
    {
      method: "GET",
    },
  );
  const data = await result.json();
  change_text.value = data.name;
  toUserId = data.id;
  // return data;
}

async function patchDevice() {
  await fetch(baseUrl + "changeDeviceUser", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      device_id: deviceId,
      from_user: actualUser,
      to_user_id: toUserId,
    }),
  });
}

loadInfo(deviceId);
