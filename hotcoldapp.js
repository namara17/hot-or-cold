	gameTally = [];
    myNum=0;
	 toggle = hintsOn = "";
$(document).ready(function(){

	/*--- Display information modal box ---*/
 	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

 
function numGen(){
    myNum = Math.ceil(Math.random()*100);
}
numGen();
    $("#guessButton").click(function(){
		userGuessed = document.getElementById('userGuess').value;
	   	(userGuessed != +userGuessed || userGuessed %1 != 0 || userGuessed >100)? user2 = prompt("Please enter an integer between 1 and 100") : user2 = +userGuessed;
	    responses = ["CONGRATULATIONS!","VERY HOT!", "HOT!", "Warm", "Cool-ish", "Cold!", "ICE COLD!"];
        diff = Math.abs(user2 - myNum);	 
        hintsOn = toggle && (((myNum-user2) >0) ? " -  guess higher" : " -  guess lower");
    $('.askHints').click(function(){
		this.text= toggle? "Hints off" : "Hints ON!";
		toggle = toggle? "":1;
	});
   if (diff > 40)
            { responseIndex = 6;
           }
        else 
		{
        responseIndex = 1+ Math.ceil(diff/10);
		    if (diff < 6) 
               { responseIndex = 1;
            			
		          if (diff === 0) {
			          responseIndex = 0;
					}
		        }
		        
	    }
shortMsg = responses[responseIndex];
longMsg = "Your guess is: " + shortMsg;
$('#feedback').text(longMsg + hintsOn);
gameTally.push(user2);
$('#count').text(gameTally.length);               //  count
document.getElementById('userGuess').value = "";
if (diff === 0) {
		$('#feedback').text("Congratulations!  You won it in " + gameTally.length + " guesses!");
		}
$("<li>" + user2 + " - " + shortMsg  + "</li>").prependTo('#guessList');
 })

	// reset game -values for   tally,    guesslist     count
$('#newGame').click(function(){
	gameTally = [];  
	$('#guessList').text("");
	$('#count').text("");
	$('#feedback').text(".");
	numGen();
     });

});
