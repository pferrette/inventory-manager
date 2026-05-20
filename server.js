const express = require("express");
const db = require("./database");

const app = express();

const port = 5000;

app.use(express.static("public"));

app.get("/userInfo", (req, res) => {
  const getUser = db.prepare("SELECT * FROM Users");
  res.status(200).json({ user: getUser.all() });
  //res.sendFile("user.html");
});

// app.post("/userPost", (req, res) => {});

app.listen(port, () => console.log(`Server running on port ${port}`));
