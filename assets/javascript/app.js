$(document).ready(function() {
    

// Variables
//=======================================================================================================================
    
    
var numCorrect;
var numIncorrect;
var numUnanswered;




// Functions
//=======================================================================================================================
    
  
function newGame() {
  
  numCorrect = 0;
  numIncorrect = 0;
  numUnanswered = 0;    
    
}  
  
  
  
  
  
  
  
  
// Function calls and User interaction
//=======================================================================================================================

 
  $("#correct-answer").text(numCorrect);
    
    
    
    
    
    //  Set our counter to 120secs
    var number = 120;

    //  Variable that will hold our interval ID when we hit run
    var intervalId;

    //  When the start button gets clicked, execute the run function.
    $(".btn-primary").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the .display-time tag.
      $(".display-time").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      clearInterval(intervalId);
    }

    
    
    
    
    
});