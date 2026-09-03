const express = require("express");
const deviceRepo = require("./repositories/deviceRepository");
const userRepo = require("./repositories/userRepository");
const mobileRepo = require("./repositories/mobileRepository");
const lineRepo = require("./repositories/lineRepository");

const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/userInfo", userRepo.getUsers);

app.get("/userInfo/:id", userRepo.getUserById);

app.post("/", userRepo.createUser);

app.put("/userInfo/:id", userRepo.updateUsers);

app.delete("/userInfo/:id", userRepo.deleteUsers);

app.get("/deviceInfo", deviceRepo.getDevices);

app.put("/deviceInfo/:id", deviceRepo.makeComment);

app.put("/changeUser/:id", deviceRepo.changeUser);

app.get("/mobileInfo", mobileRepo.getMobiles);

app.get("/mobileInfo/:id", mobileRepo.getMobilesById);

app.post("/", mobileRepo.createMobile);

app.put("/mobileInfo/:id", mobileRepo.updateMobiles);

app.delete("/mobileInfo/:id", mobileRepo.deleteMobiles);

app.get("/linesInfo", lineRepo.getLines);

app.get("/lineInfo/:id", lineRepo.getLineById);

app.post("/", lineRepo.createLine);

app.put("/lineInfo/:id", lineRepo.updateLines);

app.delete("/lineInfo/:id", lineRepo.deleteLine);

app.listen(port, () => console.log(`Server running on port ${port}`));
