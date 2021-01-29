let express = require("express");
let path = require("path");
let app = express();

//use images & css files in static folder.
app.use("/static", express.static(path.join(__dirname, "static")));

//route - home
app.get("/home", function (request, response) {
  response.sendFile(path.join(__dirname, "adventure.html"));
});

//route - choice1
app.get("/choice1", function (request, response) {
  response.sendFile(path.join(__dirname, "choice1.html"));
});

//route - choice2
app.get("/choice2", function (request, response) {
  response.sendFile(path.join(__dirname, "choice2.html"));
});

//route - conclusion
app.get("/conclusion", function (request, response) {
  response.sendFile(path.join(__dirname, "conclusion.html"));
});

app.listen(8080);
console.log("Server is running at http://localhost:8080");
