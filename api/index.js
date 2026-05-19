const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Server EcoWaste aktif 🚀");
});

module.exports = app;