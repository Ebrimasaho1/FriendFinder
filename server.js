// npm packages 
//dependencies
var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//for loop to check for friend compatibility
for (i=0; i < friendsArray.length; i++){ // user input is defined in survey.html script section
    for (j=0; j < userInput.length; j++) {
        if (Math.abs(friendsArray[i].scores-userInput[j]) === 0 || Math.abs(friendsArray[i].scores-userInput[j]) === 1 ){
            console.log("You have a match");
            
        }
        // else if (Math.abs(friendsArray[i].scores-userInput[j]) === 1) {
        //     console.log("Closest Match");
            
        // }
        // else if(Math.abs(friendsArray[i].scores-userInput[j]) === 2 ) {
        //     console.log("Closer Match");
            
        // }
        else {
            console.log("Not match found");
            
        }
    }
}
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });