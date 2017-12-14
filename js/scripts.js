//business logic
var numberToOutput = function(userInputNumber) {
  personInput = parseInt(userInputNumber);
  var numbersArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  var zeros = [0, 10, 20];
  var ones = [1,11,21];
  var divisableByThree = [3, 6, 9, 12, 15, 18, 21, 23, 26, 29];
  var result = [];

  // if ((userInputNumber.contains(^/[0-9]/))) { //number over 30

  for (var i = 0; i <= userInputNumber.length; i++) {
    numberArray.push(i);
  }

  for (var i = 0; i < userInputNumber.length -1; i++) { //first loop
    if (userInputNumber === zeros[i]) { //return "Beep!";
      numbersArray = "Beep!";
      // console.log("beeppboop");
      // debugger;
    } else if (userInputNumber === ones[i]) { //second loop
      numbersArray = "Boop!";
        // return "Boop!";
    } else if (userInputNumber === divisableByThree[i]) { //third loop
      numbersArray = "I'm sorry Dave. I'm afraid I can't do that!";
        //console.log(result);
        // return "I'm sorry Dave. I'm afraid I can't do that!";
    } else if (userInputNumber > 30) {
      numbersArray = "Error, I cant count that high!";
    }// return result;
  }
  return numberArray;
}

function checkInput(input) {
  if (input.indexof(/[0-9]/)) {
    return true;
}  else {
    return false;
  }
}

///user interface logic

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var finalNumber = parseInt($("input#userInputNumber").val());
    var output = numberToOutput(finalNumber);

    if (finalNumber = 0 || finalNumber = 10 || finalNumber = 20) {
      $(".result").text(output);
    } else (finalNumber = 1 || finalNumber = 11 || finalNumber = 21) {
      $(".result").text(output);
    } else (finalNumber = 3 || finalNumber = 6 || finalNumber = 9 || finalNumber = 12 || finalNumber = 15 || finalNumber = 18 || finalNumber = 21 || finalNumber = 23 || finalNumber = 26 || finalNumber = 29) {
      $(".result").text(output);
    }

    // $("<li>" + output + "</li>").appendTo(".result");
    // $(".result").text("Beep!").push();

  });
});
