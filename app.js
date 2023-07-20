const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const data = [
  { name: "aman", age: 26 },
  { name: "john", age: 36 },
];

app.use(cors());

app.use(express.static(path.join(__dirname, "dist/hb-fe")));

app.get("/test", (req, res) => {
  res.send("<h1>hello, this is backend</h1>");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/hb-fe/index.html"));
});

app.listen(3000, () => {
  console.log("server running and Db connected");
});
