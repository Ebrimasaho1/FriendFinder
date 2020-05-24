


//var rds = require("../Database/rds");
var mysql = require('mysql');

//  routing
module.exports = function (app) {

//post request
  app.post("/api/friends", function (req, res) {

    var connection = mysql.createConnection({
      host     : process.env.RDS_HOSTNAME,
      user     : process.env.RDS_USERNAME,
      password : process.env.RDS_PASSWORD,
      port     : process.env.RDS_PORT,
      database: "FriendList"

    });
    connection.connect(function(err) {
      if (err) {
        var error = 'Database connection failed: ' + err.stack
        console.error(error)
        return;
      }
    console.log('Connected to database.');
     
    });

var newBestFriend = {
  name:"",
  socialMedia:"",
  photo:"",
  friendScore: Infinity
}
    var newFriendData = req.body;
    console.log(newFriendData);
    //for loop to check for friend compatibility
      var connection = mysql.createConnection({
        host     : process.env.RDS_HOSTNAME,
        user     : process.env.RDS_USERNAME,
        password : process.env.RDS_PASSWORD,
        port     : process.env.RDS_PORT,
        database: "FriendList"
    
      });
      var friendsSql = "SELECT * from AboutFriend";
      connection.query(friendsSql, function (err, friendsArray){
        if (err) throw err;
        console.log("Get all columns");
        for (i = 0; i < friendsArray.length; i++) { // user input is defined in survey.html script section
          // current friend
          var currentFriend = friendsArray[i];
          var scoreDiff = 0;
          var currentFriendScores = [
            currentFriend.queOne,
            currentFriend.queTwo,
            currentFriend.queThree,
            currentFriend.queFour,
            currentFriend.queFive,
            currentFriend.queSix,
            currentFriend.queSeven,
            currentFriend.queEight,
            currentFriend.queNine,
            currentFriend.queTen
          ]
          
          for (j = 0; j < currentFriendScores.length; j++) {
            currentFriendScoreForThisQuestion = currentFriendScores[j]
            newFriendScoreForThisQuestion = newFriendData.scores[j];
            console.log("CFS " + currentFriendScoreForThisQuestion)
            console.log("NFS " + newFriendScoreForThisQuestion)
            scoreDiff += Math.abs(currentFriendScoreForThisQuestion-newFriendScoreForThisQuestion);
          }
          console.log(scoreDiff);
    
          if (scoreDiff < newBestFriend.friendScore){
            console.log("New best friend is: ");
            console.log(newBestFriend.name);
            console.log(newBestFriend.photo);
            newBestFriend.friendScore = scoreDiff;
            newBestFriend.name = currentFriend.name;
            newBestFriend.photo = currentFriend.image;
            newBestFriend.socialMedia = currentFriend.socialMedia;
          }
        }
        console.log("Finished looking for new best friend")
        console.log(newBestFriend);
        // TODO instead of "push", do a mysql INSERT,
        // you can't just insert the body
        var insertSql = "INSERT INTO AboutFriend(name,image,socialMedia,queOne,queTwo,queThree,queFour,queFive,queSix,queSeven,queEight,queNine,queTen) VALUES('"+req.body.name+"', '"+req.body.photo+"','"+req.body.socialMedia+"','"+req.body.scores[0]+"','"+req.body.scores[1]+"','"+req.body.scores[2]+"','"+req.body.scores[3]+"','"+req.body.scores[4]+"','"+req.body.scores[5]+"','"+req.body.scores[6]+"','"+req.body.scores[7]+"','"+req.body.scores[8]+"','"+req.body.scores[9]+"')";
        // var insertSql = 'INSERT ' + newFriend() + 'INTO'
        connection.query(insertSql, function(err,result){
          if (err) throw err;
          console.log("New Friend inserted");
          console.log(result);
          res.json(newBestFriend);
        })
         
        });
      
      });
}