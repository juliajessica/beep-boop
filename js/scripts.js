//business logic
var numberToOutput = function(userInput) { //creating func to take number from user
var results = [];
  debugger;

  for (var i=0; i<=userInput; i++) { //first loop
    if (i.toString().includes("0")) { //second loop
      results.push(" Beep!");
    } else if (i.toString().includes("1")) { //third loop
      results.push(" Boop!");
    } else if (i % 3 === 0) { //fourth loop
      results.push(" I'm sorry Dave. I'm afraid I can't do that!");
    }
    else {
      results.push(' ' + i); //no other case is true, push number!
    }
  }
  return results; //return the final results
}

///user interface logic
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();

    var finalNumber = parseInt($("input#userInputNumber").val());
    var finalResult = numberToOutput(finalNumber); //result will be an array
    $("#userResult").show();

    $("<li>" + finalResult + "</li>").appendTo("#userResult");

    $("#userResult").last().click(function() { //clickable
    $("#userResult").empty();

    })
  });
});
