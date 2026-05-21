const express = require("express");
const db = require("./database");

const app = express();

const port = 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/userInfo", (req, res) => {
  const getUser = db.prepare("SELECT * FROM Users");
  res.status(200).json({ user: getUser.all() });
  //res.sendFile("user.html");
});

app.post("/", (req, res) => {
  const { name, cc, email } = req.body;
  console.log(name);
  console.log(cc);
  console.log(email);
  if (!name) {
    return res.status(400)._construct({ status: "failed" });
  }
  res.status(200).send({ status: "received" });

  const setUser = db.prepare(
    "INSERT INTO Users(Name, CenterCost,Email) VALUES(?, ?, ?)",
  );
  setUser.run(name, cc, email);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
