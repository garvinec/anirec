const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("", require("./src/routes/routes"));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`App listening at http://localhost:${PORT}`);
});
