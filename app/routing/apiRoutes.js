
// Load data
//var friendsData = require("../data/friends");
var friendsArray = require("../data/friends");
var rds = require("../Database/rds");
var mysql = require('mysql');


//  routing
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  //post request
  app.post("/api/friends", function (req, res) {

    var connection = mysql.createConnection({
      host     : process.env.RDS_HOSTNAME,
      user     : process.env.RDS_USERNAME,
      password : process.env.RDS_PASSWORD,
      port     : process.env.RDS_PORT
    });
    
    connection.connect(function(err) {
      if (err) {
        var error = 'Database connection failed: ' + err.stack
        console.error(error)
        res.json("error": error);
        return;
      }
    
      console.log('Connected to database.');
    });

var newBestFriend = {
  name:"",
  photo:"",
  friendScore: Infinity
}
    var newFriendData = req.body;
    console.log(newFriendData);
    //for loop to check for friend compatibility
    for (i = 0; i < friendsArray.length; i++) { // user input is defined in survey.html script section
      // current friend
      var currentFriend = friendsArray[i];
      var scoreDiff = 0;
      for (j = 0; j < currentFriend.scores.length; j++) {

        scoreDiff += Math.abs(currentFriend.scores[j]-newFriendData.scores[j]);
        
      //  console.log(currentFriend.scores[j]);
      //  console.log(newFriendData.scores[j]);
        
      }
      console.log(scoreDiff);

      if (scoreDiff < newBestFriend.friendScore){
        newBestFriend.friendScore = scoreDiff;
        newBestFriend.name = currentFriend.name;
        newBestFriend.photo = currentFriend.photo;
      }
    }
    console.log(newBestFriend);
      // TODO: Instead of pushing to the array,
      // Instead, write a row to the database.
      //
      // Pseudocode:
      // mysql_connection.write_row(..., )
      friendsArray.push(req.body);
      res.json(newBestFriend);


    });
}