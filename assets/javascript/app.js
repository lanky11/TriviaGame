
  

$(".start-game").on("click", function() {
  game.start();
}); 


$(document).on("click", "#done", function(){
  game.done();
});

  


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





var game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  
  countdown: function() {
	  game.counter--;
	  $("#counter").html(game.counter);

	  if (game.counter <= 0) {
		  game.done();
	  }
	},
	
	start: function() {
	  
	  var timer = setInterval(game.countdown, 1000);
	  $('.main-display').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
	  
	  $('.start-game').remove();
  
    // Loop over questions to display them on the page with the answer options
    for(var i=0; i<questions.length; i++) {
      $(".main-display").append('<h2>' + questions[i].question + '</h2>');
      
      for (var j=0; j<questions[i].options.length; j++) {
        $(".main-display").append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].options[j] + '">' + questions[i].options[j]);
      }
    }
    
    $('.main-display').append('<br><button id="btn btn-primary btn-lg mb-3 end-game">End Game</button>')
  	  
  },
  
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  	$.each($("input[name='question-5']:checked"), function() {
  			if ($(this).val() == questions[5].answer) {
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		
  this.result();
    
  },
  
  result: function() {
  	clearInterval(timer);
  
    $(".main-display h2").remove();
    $(".main-display").html("<h2>You're Done!</h2>");
    $(".main-display").append("<h3>Correct: " + this.correct + "</h3>");
    $(".main-display").append("<h3>Incorrect: " + this.incorrect + "</h3>");
    $(".main-display").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  
  }
  
	
};
  
    
    


