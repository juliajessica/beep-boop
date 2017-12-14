//business logic
var numberToOutput = function(userInputNumber) {

  // var numbersArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  // var zeros = [0, 10, 20];
  // var ones = [1,11,21];
  // var divisableByThree = [3, 6, 9, 12, 15, 18, 21, 23, 26, 29];

  var result = [];

  // if ((userInputNumber.contains(^/[0-9]/))) { //number over 30

  // for (var i = 0; i <= userInputNumber.length; i++) {
  //   numberArray.push(i);
  // }

  for (var i = 2; i < userInputNumber.length -1; i++) { //first loop
    if (userInputNumber.toString().includes("0") ) {
      results.push("Beep!");
    } else if (userInputNumber.toString().includes("1") { //second loop
      results.push("Boop!");
        // return "Boop!";
    } else if () { //modulo needs to operate on a number
        results.push();
    }
    else {
      results.push(i); //no other case is true, push number!
    }
  }
  return results;
}

// function checkInput(input) {
//   if (input.indexof(/[0-9]/)) {
//     return true;
// }  else {
//     return false;
//   }
// }

///user interface logic

$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    var finalNumber = parseInt($("input#userInputNumber").val());
    var output = numberToOutput(finalNumber); //output is an array!!!!!!!!!!

    // if (finalNumber = 0 || finalNumber = 10 || finalNumber = 20) {
    //   $(".result").text(output);
    // } else (finalNumber = 1 || finalNumber = 11 || finalNumber = 21) {
    //   $(".result").text(output);
    // } else (finalNumber = 3 || finalNumber = 6 || finalNumber = 9 || finalNumber = 12 || finalNumber = 15 || finalNumber = 18 || finalNumber = 21 || finalNumber = 23 || finalNumber = 26 || finalNumber = 29) {
    //   $(".result").text(output);
    // }


  //["beep", "boop", "dave", 4, 5] etc....

  //for loop to show this nicely.
    $("<li>" + output[i] + "</li>").appendTo(".result");
    // $(".result").text("Beep!").push();


    // output[0] this could be replaced by a nice loop.
    // output[1]
    // output[2]
    // output[3]



  });
});
