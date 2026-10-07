const express = require("express");
const path = require("path");
const deviceRepo = require("./repositories/deviceRepository");
const userRepo = require("./repositories/userRepository");
const mobileRepo = require("./repositories/mobileRepository");
const lineRepo = require("./repositories/lineRepository.js");

const userController = require("./controller/userController");
const mobileController = require("./controller/mobileController.js");
const deviceController = require("./controller/deviceController.js");
const lastChangeController = require("./controller/lastChangeController.js");
const termController = require("./controller/termController.js");
const lineController = require("./controller/lineController.js");

const app = express();

const port = 5000;

app.use(express.static(path.join(__dirname, "public", "pages")));

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

//user
app.get("/userInfo", userRepo.getUsers);

app.get("/api/user/:id", userController.getUserById);

app.get("/users/:id", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/pages", "user-details.html"));
});

app.post("/user", userController.createUser);

app.put("/userInfo/:id", userRepo.updateUsers);

app.delete("/userInfo/:id", userRepo.deleteUsers);

//device
app.get("/device", deviceRepo.getDevices);

app.get("/device/:id", deviceController.getDeviceById);

app.get("/api/device/:id", deviceController.getDeviceByUserId);

app.put("/deviceInfo/:id", deviceRepo.makeComment);

app.put("/changeDeviceUser", deviceController.updateDevice);

//mobile
app.get("/mobiles", mobileController.getAllMobiles);

app.get("/mobileInfo/:id", mobileRepo.getMobilesById);

app.get("/api/mobile/:id", mobileController.getMobileByUserId);

app.post("/", mobileRepo.createMobile);

app.put("/mobileInfo/:id", mobileRepo.updateMobiles);

app.put("/mobileUser", mobileController.updateMobile);

app.delete("/mobileInfo/:id", mobileRepo.deleteMobiles);

//lines
app.get("/linesInfo", lineRepo.getLines);

app.get("/lineInfo/:id", lineRepo.getLineById);

app.get("/api/lines/:id", lineController.getLineByUserId);

app.post("/", lineRepo.createLine);

app.put("/lineInfo/:id", lineRepo.updateLines);

app.delete("/lineInfo/:id", lineRepo.deleteLine);

//last changes
app.get("/changes", lastChangeController.getChanges);

//terms
app.get("/terms", termController.getTerms);
app.get("/api/terms/:id", termController.getTermsByUserId);

//port
app.listen(port, () => console.log(`Server running on port ${port}`));
