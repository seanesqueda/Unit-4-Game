$(document).ready(function () {

    //Global variable for counting and crystal values
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    //Create a function that gets a random number
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Function to start the game
    function startGame() {
        //Generate random number
        randomNumber = getRndInteger(19, 120);
        //Generate random value for each crystal while maintaining that no crystals are same value
        crystal1 = getRndInteger(1, 12);
        crystal2 = getRndInteger(1, 12);
        while (crystal2 === crystal1) {
            crystal2 = getRndInteger(1, 12);
        }
        crystal3 = getRndInteger(1, 12);
        while (crystal3=== crystal1 || crystal3 === crystal2) {
            crystal3 = getRndInteger(1, 12);
        }
        crystal4 = getRndInteger(1, 12);
        while (crystal4 === crystal3 || crystal4 === crystal2 || crystal4 === crystal1){
            crystal4 = getRndInteger(1, 12);
        }
        //Display to screen
        $('#randomNumber').text(randomNumber);
        counter = 0;
        $("#totalScore").text(counter);
    }

    //Create function that checks if we win or we lose
    function checkWin() {
        if (counter === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            startGame();
        }
        else if (counter > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            startGame();
        }
    }
    //Create functions for clicking on crystals
    $("#crystal1").on("click", function () {
        counter = counter + crystal1;
        $("#totalScore").text(counter);
        checkWin();
    });
    $("#crystal2").on("click", function () {
        counter = counter + crystal2;
        $("#totalScore").text(counter);
        checkWin();
    });
    $("#crystal3").on("click", function () {
        counter = counter + crystal3;
        $("#totalScore").text(counter);
        checkWin();
    });
    $("#crystal4").on("click", function () {
        counter = counter + crystal4;
        $("#totalScore").text(counter);
        checkWin();
    });

    //Start the game on load
    startGame();
});
