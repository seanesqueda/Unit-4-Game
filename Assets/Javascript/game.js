$( document ).ready(function() {

    //Global variable for counting and crystal values
    var counter = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    //Create a function that gets a random number between 19-120
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    //Function that distributes variables on load
    randomNumber = getRndInteger(19,120);
    crystal1 = getRndInteger(1,12);
    crystal2 = getRndInteger(1,12);
    crystal3 = getRndInteger(1,12);
    crystal4 = getRndInteger(1,12);
    //Display to screen
    $('#randomNumber').text(randomNumber);
    
    //Create functions for clicking on crystals
    $("#crystal1").on("click",function() {
        counter = counter + crystal1;
        $("#totalScore").text(counter);
    });
    $("#crystal2").on("click",function() {
        counter = counter + crystal2;
        $("#totalScore").text(counter);
    });
    $("#crystal3").on("click",function() {
        counter = counter + crystal3;
        $("#totalScore").text(counter);
    });
    $("#crystal4").on("click",function() {
        counter = counter + crystal4;
        $("#totalScore").text(counter);
    });
});
