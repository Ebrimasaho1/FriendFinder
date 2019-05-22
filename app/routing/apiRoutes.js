

// Load data
var friendsData = require("../data/friends");





//  routing
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });


      //post request
      app.post("/api/friends", function(req, res) {
       
        if (friendsData.length < 5) {
          friendsData.push(req.body);
          res.json(true);
        }
        
      });
}