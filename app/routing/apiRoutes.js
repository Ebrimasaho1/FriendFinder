

// Load data
//var friendsData = require("../data/friends");
var friendsArray = require("../data/friends")


//  routing
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  //post request
  app.post("/api/friends", function (req, res) {


    var newFriendData = req.body;
    console.log(newFriendData);
    //for loop to check for friend compatibility
    for (i = 0; i < friendsArray.length; i++) { // user input is defined in survey.html script section
      // current friend
      var currentFriend = friendsArray[i];
      var scoreaDiff = 0;
      for (j = 0; j < currentFriend.scores.length; j++) {

        scoreaDiff += Math.abs(currentFriend.scores[j]-newFriendData.scores[j]);
        console.log(scoreDiff);
       console.log(currentFriend.scores[j]);
       console.log(newFriendData.scores[j]);
        
      }
    }
      friendsData.push(req.body);
      res.json(true);


    });
}