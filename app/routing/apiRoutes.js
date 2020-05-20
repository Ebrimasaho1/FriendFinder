


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
      // var sql = "DELETE FROM AboutFriend WHERE id > 1";
      // connection.query(sql, function (err, result){
      //   if (err) throw err;
      //   console.log("Name and image deleted");
      // });
    });

var newBestFriend = {
  name:"",
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
          
          var newFriendScores = [
            newFriendData.queOne,
            newFriendData.queTwo,
            newFriendData.queThree,
            newFriendData.queFour,
            newFriendData.queFive,
            newFriendData.queSix,
            newFriendData.queSeven,
            newFriendData.queEight,
            newFriendData.queNine,
            newFriendData.queTen
          ]
          for (j = 0; j < currentFriendScores.length; j++) {
    
            scoreDiff += Math.abs(currentFriendScores[j]-newFriendScores[j]);
            
            
          }
          console.log(scoreDiff);
    
          if (scoreDiff < newBestFriend.friendScore){
            newBestFriend.friendScore = scoreDiff;
            newBestFriend.name = currentFriend.name;
            newBestFriend.photo = currentFriend.photo;
          }
        }
        console.log(newBestFriend);
        // TODO instead of "push", do a mysql INSERT,
        // you can't just insert the body
        var insertSql = "INSERT INTO AboutFriend(name,image,queOne,queTwo,queThree,queFour,queFive,queSix,queSeven,queEight,queNine,queTen) VALUES('"+req.body.name+"', '"+req.body.photo+"','"+req.body.scores[0]+"','"+req.body.scores[1]+"','"+req.body.scores[2]+"','"+req.body.scores[3]+"','"+req.body.scores[4]+"','"+req.body.scores[5]+"','"+req.body.scores[6]+"','"+req.body.scores[7]+"','"+req.body.scores[8]+"','"+req.body.scores[9]+"')";
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