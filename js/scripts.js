//business logic
var numberToOutput = function(personInputConverter) {
  personInput = parseInt(personInput);
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
  var zeros = ["0", "10", "20"];
  var ones = ["1","11","21"];
  var divisableByThree = ["3", "6", "9", "12", "15", "18", "21", "23", "26", "29"];
  var result = "";


  if (!(personInputConverter.match(/[0-9]/))) {
    return "Error!"; //not a number
  } else if (personInput > 30) {
      return "Error, I cant count that high!"; //number over 30
  }
  else {
    for (var i=0; i<numbersArray.length; i++) { //first loop
      if (personInput === zeros[i]) {
        return "Beep!";
      }
    }
    for (var i=0; i<numbersArray.length; i++) { //second loop
      if (personInput === ones[i]) {
        return "Boop!";
      }
    }
    for (var i=0; i<numbersArray.length; i++) { //third loop
      if (personInput === divisableByThree[i]) {
        return "I'm sorry Dave. I'm afraid I can't do that!";
      }
    }
    return result;
  }
}

function checkInput(input) {
  if (input.match(/[0-9]/)) {
    return true;
}  else {
    return false;
  }
}

///user interface logic

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();


    var personInput = $("#userInputNumber").val();
    var checker = checkInput(personInput)

    if (checker === true) {
debugger;
      var result = numberToOutput(personInput); //box containing input
      $("#result").text(result)  //send result to user
    }
    else {
      $("#result").text("I can't count that high!")
    }
  });
});




      // var result= "";
// var str = "";
// var subtract1 = str.subtr(1) //subtract first number
// var subtract2 = str.subtr(2) //subtract second number

// //var beepBoopArray = function(number) {
//   if (number)
// }

// return numbers[i];
// }  else {
//   return false;
// } return results;
// //
// function checkInput(input) {



//    }
// }
