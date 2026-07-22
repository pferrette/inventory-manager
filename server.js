const express = require("express");
// const postgres = require("./database");
const deviceRepo = require("./repositories/deviceRepository");
const userRepo = require("./repositories/userRepository");

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

app.listen(port, () => console.log(`Server running on port ${port}`));
