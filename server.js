const express = require("express");
const db = require("./database");

const app = express();

const port = 5000;

app.use(express.static("public"));

app.get("/info", (req, res) => {
  const getUser = db.prepare("SELECT * FROM Users");
  //console.log(getUser.all());
  res.status(200).json({ info: getUser.all() });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
