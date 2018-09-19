

//I was unable to get the timer to stop running into negative numbers.
//I was also unable to reveal the final tally at the end.


$(document).ready(function() {


$("#finalTally").hide();
$(".questions").hide();
$("#done").hide();

    
   
//two variables, one for keeping score and the other for counting down time.

var score= 0;
var counter = 10;
var intervalId;


//Function that counts down the seconds and displays the counter in HTML.

function counterFunction() {
    counter = counter-1;
    $("#timer").text(counter);
};

//When "start" is clicked, the counter counts down.

 
$("#start").on("click", function() {
   intervalId = setInterval(counterFunction, 1000);
   $(".questions").show();
   $("#start").hide();
   $("#done").show();
});



//if the counter has hit zero, the inverval is cleared, meaning the counter vanishes. The questions disappear.

if (counter === 0) {
    clearInterval(intervalId); 
    $(".questions").hide();
    //show final tally
    ("#finalTally").show();
}

// if the user hits the "done" button, the questions are supposed to hide and the intervalId is supposed to stop. 

$("#done").click(function() {
    console.log("inside Done");
    clearInterval(intervalId);
    $(".questions").hide();
    //show final tally
    $("#finalTally").show();
});


//a variable is created that checks the correct answers. 

var correctAnswer = 0;

//incorrect answer element has a counter of zero.

var incorrectAnswer = 0;

//create a variable to contain the number of unanswered questions.

var unanswered = 0;

//equation that makes the value of clicked item equal to the value defined in HTML.

$.each($("input[name='question0']:checked"), function () {
    var valOfClickedItem = $(this).val();

//the number of incorrect answers are checked and added to the variable incorrectAnswers.

if (valOfClickedItem === false) {
    incorrectAnswer = incorrectAnswer + 1;
}

//For every correctAnswer radio button that's checked, the score is increased by one. 

if (valOfClickedItem === true) {
    correctAnswer = correctAnswer + 1;
}


// The number of correct and incorrect answers are subtracted from the total number of questions, 4.
//This leaves us with the number of unanswered questions.

unanswered = (4-(correctAnswer + incorrectAsnwer));

//print out this part of the document that shows the users the correct answers, incorrect answers, and score.
 
$("#finalTally").text("Correct answers: " + score + "Incorrect answers :" + incorrectAnswers + "Unanswered: " + unanswered);

});


});