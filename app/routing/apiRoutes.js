let friends = require("./../data/friends")


module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res) {
    let newUser = req.body;
    let userAnswers = newUser.scores;
    let friendMatchName = "";
    let friendMatchImage = "";
    let totalDifference = 100000

    for (let i = 0; i < friends.length; i++) {
      let scoreDifference = 0;
      for (var x; x < userAnswers.length; x++) {
        scoreDifference += Math.abs(friends[i].scores[x] - userAnswers[x]);
      }
      if (scoreDifference < totalDifference) {
        totalDifference = scoreDifference;
        friendMatchName = friends[i].name;
        friendMatchImage = friends[i].photo;
      }
    }
    friends.push(newUser);
    res.json({friendMatchName: friendMatchName, friendMatchImage: friendMatchImage})
  });
}