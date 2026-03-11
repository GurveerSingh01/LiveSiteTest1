const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/home", (req, res) => {
  res.json({ message: "Kive aa singh" });
});

app.get("/api/about", (req, res) => {
  res.json({ message: "This is the About page" });
});

app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});