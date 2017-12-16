//business logic
var numberToOutput = function(userInputNumber) {
  var result = [];

  for (var i = 2; i < userInputNumber.length -1; i++) { //first loop
    if (userInputNumber.toString().includes("0") ) {
      results.push("Beep!");
    } else if (userInputNumber.toString().includes("1") { //second loop
      results.push("Boop!");
        // return "Boop!";
    } else if (userInputNumber.string().includes() { //modulo needs to operate on a number
        results.push("I'm sorry Dave. I'm afraid I can't do that!");
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
