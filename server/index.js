const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there", hello: "aurevoir" });
});

app.listen(5001);
