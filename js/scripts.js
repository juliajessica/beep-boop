//business logic
var numberToOutput = function(personInputConverter) {
  personInput = parseInt(personInputConverter);
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
  var zeros = ["0", "10", "20"];
  var ones = ["1","11","21"];
  var divisableByThree = ["3", "6", "9", "12", "15", "18", "21", "23", "26", "29"];
  var result = "";


  if (!(personInputConverter.match(/[0-9]/))) { //number over 30
    return "Error!"; //not a number
  } else if (personInput > 30) {
    $(".result").text("Error, I cant count that high!");
      // return "Error, I cant count that high!";
  }
  else {
    for (var i = 0; i < numbersArray.length; i++) { //first loop
      if (personInput === zeros[i]) {
        $(".result").text("Beep!").show();
        //return "Beep!";
      }
    }
    for (var i = 0; i < numbersArray.length; i++) { //second loop
      if (personInput === ones[i]) {
        $(".result").text("Boop!").show();
        // return "Boop!";
      }
    }
    for (var i = 0; i < numbersArray.length; i++) { //third loop
      if (personInput === divisableByThree[i]) {
        $(".result").text("I'm sorry Dave. I'm afraid I can't do that!").show();
        // return "I'm sorry Dave. I'm afraid I can't do that!";
      }
    }
    // return result;
    $(".result")
  }
}

// function checkInput(input) {
//   if (input.match(/[0-9]/)) {
//     return true;
// }  else {
//     return false;
//   }
// }

///user interface logic

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var result = parseInt($("input#result").val());
    var output = numberToOutput(result);

$(".result").text(output);

//     var personInput = $("#userInputNumber").val();
//     var checker = checkInput(personInput)
//
//     if (checker === true) {
// debugger;
//       var result = numberToOutput(personInput); //box containing input
//       $("#result").text(result)  //send result to user
//     }
//     else {
//       $(".result").text("I can't count that high!")
//     }
  });
});
