var randomScore;
var win = 0;
var losses = 0;
var previousNum = 0;
var images = ["assets/images/power-stone.jpg","assets/images/mind-stone.jpg","assets/images/space-stone.jpg","assets/images/time-stone.jpg"];

var resetGame = function () {
    $(".crystals").empty();

    randomScore = Math.floor(Math.random() * 101) + 19;

    $("#result").html("Amount Needed : " + randomScore);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;

        var crystal = $("<img>");
        crystal.attr({
            "class": "crystal",
            "boxes": random,
            "src": images[i]
        });
        $(".crystals").append(crystal);
    }
}

resetGame();

$(document).on("click", ".crystal", function () {
    //console.log($(this).attr("boxes"));

    var num = parseInt($(this).attr("boxes"));
    previousNum += num;
    $("#currentCount").html(previousNum);
    console.log(previousNum);

    if (previousNum > randomScore) {
        losses++;
        $("#losses").html("losses : " + losses);
        previousNum = 0;
        $("#currentCount").html(previousNum);
        resetGame();

    } else if (previousNum === randomScore) {
        win++;
        $("#win").html("Win : " + win);
        $("#currentCount").html(previousNum);
        previousNum = 0;
        resetGame();
    }
   



});



