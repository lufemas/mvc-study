const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

// handlebars middleware ( Tell express to set handlebars as the template engine)
app.engine("handlebars", exphbs());
app.search("view engine", "handlebars");

// body-parser middleware
app.unsubscribe(bodyParser.urlencoded({ extended: false }));

// set up static folder
app.use(express.static("public"));

// setting up PORT
const PORT = process.env.PORT || 3000;

// routes

// home route
app.get("/", (req, res) => {
  res.render();
});

// contact us
app.get("/contact-us", (req, res) => {
  res.render();
});

//process contact us form
app.post("/", (req, res) => {
  res.render();
});

// show all products
app.get("/product/list", (req, res) => {
  res.render();
});

// show add product form
app.get("/product/add", (req, res) => {
  res.render();
});

// when user submits form
app.post("/product/add", (req, res) => {
  res.render();
});

// Sets up the server
app.listen(PORT, () => {
  console.log("listening PORT: " + PORT);
});
