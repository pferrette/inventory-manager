const express = require("express");
const postgres = require("./database");

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

app.listen(port, () => console.log(`Server running on port ${port}`));
