const express = require("express");
const postgres = require("./database");
const deviceRepo = require("./repositories/deviceRepository");

const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get("/userInfo", postgres.getUsers);

app.get("/userInfo/:id", postgres.getUserById);

app.post("/", postgres.createUser);

app.put("/userInfo/:id", postgres.updateUsers);

app.delete("/userInfo/:id", postgres.deleteUsers);

app.get("/deviceInfo", deviceRepo.getDevices);

app.put("/deviceInfo/:id", deviceRepo.makeComment);

app.put("/changeUser/:id", deviceRepo.changeUser);

app.listen(port, () => console.log(`Server running on port ${port}`));
