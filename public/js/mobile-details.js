const mobileId = window.location.pathname.split("/").pop();
const baseUrl = "http://localhost:5000/";

const phoneModel = document.getElementById("phoneModel");
const imei = document.getElementById("imei");
const price = document.getElementById("price");
const pay_status = document.getElementById("pay_status");
const tranche_price = document.getElementById("tranche_price");
const buy_date = document.getElementById("buy_date");
const tranche = document.getElementById("tranche");
const username = document.getElementById("username");
const cc = document.getElementById("cc");
const policy = document.getElementById("policy");
const line_number = document.getElementById("line_number");

async function loadMobile(id) {
  const result = await fetch(baseUrl + "mobile/detail/" + id, {
    method: "GET",
  });
  const data = await result.json();
  console.log(data.mobile);

  phoneModel.innerText += data.mobile.model;
  imei.innerText += data.mobile.imei;
  price.innerText += data.mobile.price;
  pay_status.innerText += data.mobile.payment_status;
  tranche_price.innerText += data.mobile.tranche_price;
  buy_date.innerText += data.mobile.buy_date;
  tranche.innerText += "No data";
  username.innerText += data.mobile.name;
  cc.innerText += data.mobile.center_cost;
  policy.innerText += data.mobile.out_of_policy;
  line_number.innerText += data.mobile.number;
}

loadMobile(mobileId);
