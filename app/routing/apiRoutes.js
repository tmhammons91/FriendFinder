var buddiesArray = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(buddiesArray);
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body;
        var userScores = req.body.scores;
        var userTotal = 0;
        for (i = 0; i < userScores.length; i++) {
            var scoreInt = parseInt(userScores[i])
            userTotal = userTotal + scoreInt
        }

        var bookBuddies = [];
        var currentBuddy;

        for (i = 0; i < buddiesArray.length; i++) {
            if (userTotal > buddiesArray[i].totalScore) {
                var difference = userTotal - buddiesArray[i].totalScore;
                bookBuddies.push({ name: buddiesArray[i].name, photo: buddiesArray[i].photo, totalDif: difference })
            }
            else if (userTotal < buddiesArray[i].totalScore) {
                var difference = buddiesArray[i].totalScore - userTotal;
                bookBuddies.push({ name: buddiesArray[i].name, photo: buddiesArray[i].photo, totalDif: difference })
            }
        }

        var sorted = bookBuddies.sort(function (a, b) {
            return a.totalDif - b.totalDif
        })

        currentBuddy = sorted[0];
        buddiesArray.push(req.body);
        res.json(currentBuddy);
    });
}



