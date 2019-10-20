let friends = require("../friends.js")

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let newfriend = req.body;
    console.log(newfriend);  
    // We then add the json the user sent to the character array
    friends.push(newfriend);
    // We then display the JSON to the users
    res.json(newfriend);
  });