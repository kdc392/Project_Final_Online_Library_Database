//import { checkForBooks } from "../src/mongoose";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

console.log("Attempting Mongoose Login");
mongoose.connect(
  "mongodb+srv://[mongopassword]@[mongoURL]"
);
console.log("Mongoose Login Success");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.get("/", (req, res) => {
  res.send("Hello from Server");
  checkForBooks();
});

app.post("/", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
