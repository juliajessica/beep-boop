//business logic
var results = [];

var numberToOutput = function(userInputNumber) {

  for (var i = 2; i < userInputNumber.length -1; i++) { //first loop
    if (userInputNumber.toString().includes("0")) {
      results.push("Beep!");
    } else if (userInputNumber.toString().includes("1")) { //second loop
      results.push("Boop!");
    } else if (userInputNumber.toString().includes(userInputNumber % 3 === 0 && userInputNumber/3 >= 1)) { //modulo needs to operate on a number
        results.push("I'm sorry Dave. I'm afraid I can't do that!");
        // cosole.log("I'm sorry Dave. I'm afraid I can't do that!");

    }
    else {
      results.push(i); //no other case is true, push number!
    }
  }
  return results;
}

///user interface logic

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var finalNumber = parseInt($("input#userInputNumber").val());
    var output = numberToOutput(finalNumber); //output is an array!!!!!!!!!!
    $("ul#result").show();
    // debugger;
    // var listArray = function() {
        // (var i = 0; i < userInputNumber.length; i++) {
    for (var i = 0; i < results.length; i++) {
      $("<li>" + results[i] + "</li>").appendTo("#result");

      // $("<li>" + output + "</li>").appendTo("ul#result");

    }
  });
});
    // output = results;
    // console.log(finalNumber);


//     // results.forEach(function(result) {
//     // $("<li>" + result + "</li>").appendTo(".result");
//     // });
// });
// });
    // $("<li>" + output[i] + "</li>").appendTo(".result");
  //["beep", "boop", "dave", 4, 5] etc....


    // output[0] this could be replaced by a nice loop.
    // output[1]
    // output[2]
    // output[3]
