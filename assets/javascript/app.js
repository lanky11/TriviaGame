
  
// Game questions and answers
// =========================================================================================

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


// Variables
// =========================================================================================


  var correct = 0;
  var incorrect = 0;
  var counter = 60;
  
  
// Functions
// =========================================================================================


// Functions to count down from 60
  function countdown() {
	  counter--;
	  $("#counter").html(counter);

	  if (counter <= 0) {
	    // run done function when time reaches 0
		  done();
	  }
	};
	
//Function that gets called when the start button is clicked	
	 function start() {
	  
	  // sets timer to run countdown function ever 1sec
	  timer = setInterval(countdown, 1000);
	  $('.main-display').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
	  
	  // remove start game button and instructions
	  $('.instructions').remove()
	  $('.start-game').remove();
  
    // Loop over questions to display them on the page with the answer options
    for(var i=0; i<questions.length; i++) {
      $(".main-display").append('<h2>' + questions[i].question + '</h2>');
      
      for (var j=0; j<questions[i].options.length; j++) {
        $(".main-display").append('<br><input type="radio" name ="question' + '-' + i + '"value="' + questions[i].options[j] + '">' + questions[i].options[j]);
      }
    }
    
    $('.main-display').append('<br><button class="btn btn-primary btn-lg m-3" id="end-game">End Game</button>')
  	  
  };
  
  
// Function that will run when the end game button is clicked. 
   function done() {
    
    //checks clicked answer against answer for questions 1-6
    $.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-5']:checked"), function() {
  			if ($(this).val() == questions[5].answer) {
  				correct++;
  			} else {
  				incorrect++;
  			}

  		});
  
  // shows the result of quiz		
  result();
  
    
  }
  
// Renders the info to the page.  
   function result() {
  	clearInterval(timer);
  
    $(".main-display h2").remove();
    $(".main-display").html("<h2>You're Done!</h2>");
    $(".main-display").append("<h3>Correct: " + correct + "</h3>");
    $(".main-display").append("<h3>Incorrect: " + incorrect + "</h3>");
    $(".main-display").append("<h3>Unanswered: " + (questions.length - (incorrect + correct)) + "</h3>");
  
  }

  
    
// On click events for starting and ending a game.
// =========================================================================================

  $(".start-game").on("click", function() {
    start();
  }); 
  
  
  $(document).on("click", "#end-game", function(){
    done();
  });
