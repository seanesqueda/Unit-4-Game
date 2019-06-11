$( document ).ready(function() {

    //Create a variable that gets a random number between 19-120
    randomNumber = Math.floor(Math.random() * (121 - 19) ) + 19;
    //Display to screen
    $('#randomNumber').text(randomNumber);

});
