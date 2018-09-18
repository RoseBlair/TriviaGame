$(document).ready(function() {


$("#finalTally").hide();
$(".questions").hide();
    
   
//two variables, one for keeping score and the other for counting down time.

var score= 0;
var counter = 10;



//Function that counts down the seconds and displays the counter in HTML.

function counterFunction() {
    counter = counter-1;
    $("#timer").text(counter);
    return counter;
};

//When "start" is clicked, the counter counts down.

 
$("#start").on("click", setInterval(counterFunction, 1000));
$("#start").on("click", $(".questions").show());


//if the counter has hit zero, the inverval is cleared, meaning the counter vanishes. The questions disappear.

if (counter = 0) {
    clearInterval(counter); 
    $(".questions").hide();
    //show final tally
    ("#finalTally").show();
}

// if the user hits the "done" button, the questions are supposed to hide and the counter is supposed to stop. 

$("#done").click(function() {
    clearInterval(counter);
    $(".questions").hide();
    //show final tally
    ("#finalTally").show();
});


//a variable is created that checks the correct answers. 

var correctAnswer = 0;

//the correctAnswer variable is somehow responsive to the correctAnswer HTML class. 

var correctAnswer = document.getElementByClass(".correctAnswer");

//incorrect answer element has a counter of zero.

var incorrectAnswer = 0;

//the incorrect answers variable somehow collects infortion on the incorrect answers in the HTML.

var incorrectAnswer = document.getElementByClass("incorrectAnswer");

var unanswered = 0;

//For every correctAnswer radio button that's checked, the score is increased by one. 
// Calculate the incorrect answers. 

if (correctAnswer.checked() = true) {
        score++;
    }

//the number of incorrect answers are checked and added to the variable incorrectAnswers.
//incorrectAnswers is returned.


else if (incorrectAnswer.checked() = true) {
    incorrectAnswer++;
}

//unanswered answers are calculated by subtracting the correct answers and incorrect answers from the total number
//of questions, which is 4. 

unanswered = (4-(correctAnswer + incorrectAnwer));

//print out this part of the document that shows the users the correct answers, incorrect answers, and score.

$("#finalTally").text("Correct answers: " + score + "Incorrect answers :" + incorrectAnswers + "Unanswered: " + unanswered)
    
   

});