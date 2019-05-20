

// Load data
var friendsData = require("../data/friends");





//  routing
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });


      //post request
      app.post("/api/tables", function(req, res) {
       
        if (friends.length < 5) {
          tableData.push(req.body);
          res.json(true);
        }
        
      });
}