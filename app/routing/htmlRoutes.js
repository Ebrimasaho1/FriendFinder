
// DEPENDENCIES
var path = require("path");


module.exports = function(app) {
    



// Get routes
//Google authentication route
app.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

//Surver route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  // If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}