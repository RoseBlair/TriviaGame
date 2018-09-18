
$(document).ready(function() {
var score= 0;
var counter = 10;

$("#wrapper").show();


function counterFunction() {
    counter = counter-1;
    $("#timer").text(counter);
    return counter;
};

 
$("#start").on("click", setInterval(counterFunction, 1000));


if (counter = 0) {
    clearInterval(); }


var correctAnswer = documents.getElementByClass(".correctAnswer");
   if (correctAnswer.checked) {
        score = score + 1;
    };

    
    $("#done").click(function() {
        $("#wrapper").hide();
    });

});