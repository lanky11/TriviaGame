// Hide  elements
//=======================================================================================================================
   //$('.questions').hide();
   //$('.game-results').hide();




$(document).ready(function() {
  


// Variables
//=======================================================================================================================
    
    
var numCorrect;
var numIncorrect;
var numUnanswered;
var counter;

// Game questions and answers

var questions = [{
  
    question: "Who has the most NBA championships as a player?",
    options: ["Michael Jordan", "Bill Russell", "Robert Horry", "Magic Johnson"],
    answer: "Bill Russell"
    
  }, {
    question: "Who has the most career NFL passing yards?",
    options: ["Peyton Manning", "Brett Favre", "Drew Brees", "Dan Marino"],
    answer: "Peyton Manning"
    
  }, {
    
    question: "What golfer has the most career PGA Tour wins?",
    options: ["Jack Nicklaus", "Tiger Woods", "Sam Snead", "Arnold Palmer"],
    answer: "Sam Snead"
    
  }, {
    
    question: "What school has the most NCAA division I men's basketball championships?",
    options: ["North Carolina", "Duke", "UCLA", "Kentucky"],
    answer: "UCLA"
    
  }, {
    
    question: "What player has the most World Series rings?",
    options: ["Yogi Berra", "Joe DiMaggio", "Lou Gehrig", "Phil Rizzuto"],
    answer: "Yogi Berra"
    
  }, {
    
    question: "What golfer has the most wins in Major Championships?",
    options: ["Walter Hagen", "Tiger Woods", "Ben Hogan", "Jack Nicklaus"],
    answer: "Jack Nicklaus"
    
  }
];


// Loop over questions to display them on the page with the answer options

for(var i=0; i<questions.length; i++) {
  $(".question").append(questions[i].question);
  
  for (var j=0; j<questions[i].options.length; j++) {
    $(".options").append(questions[i].options[j]);
  }
  
  console.log(questions[i].question);
  console.log(questions[i].options);
  console.log(questions[i].answer);
}



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
  $("#incorrect-answer").text(numIncorrect);
  $("#unanswered").text(numUnanswered);
    
    
    
   
  // Timer ========================
  
    //  Set our counter to 120secs
    counter = 120;

    //  Variable that will hold our interval ID when we hit start
    var intervalId;

    //  When the start button gets clicked, execute the run function.
    $(".btn-primary").on("click", run);

    
    //  The run function sets an interval that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
      $('.questions').show();
    }

    //  The decrement function.
    function decrement() {
      
      //  Decrease counter by one.
      counter--;

      //  Show the counter in the .display-time tag.
      $(".display-time").html("<h2>" + counter + "</h2>");


      //  Once counter hits zero...
      if (counter === 0) {

        //  ...run the stop function.
        stop();
        
        // hide all the questions
        // $('.questions').hide();
        
        // show the results
        // $('.game-results').show();

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