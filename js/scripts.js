//user interface logic
$(document).ready(function() {
  $("form#beepboop").submit(function(event) {
  var finalResult = $("input#userInput").val();
  event.preventDefault();
  finalResult === numbersArray;

  var numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  var zeros = ["0", "10", "20", "30"];
  var ones = ["1","11","21"];
  var divisableByThree = ["3", "6", "9", "12", "15", "18", "21", "23", "26", "29"];

    for (var i=0; i <=finalResult.length; i++) {
      numbersArray.push(i);
    }




//     for (var i=0; i <number; index++) {
//   if (numberArray[i] !== 0) {
//     $("#outputResults").append(numberArray[i] + " ").css("font-size", index + "px;");
//   }
// }
$("#result").show();

  });
});
//       else {
//
//
//     }
//
//
// ///business logic
//     var numbersOutput = function(number)
//



      // var result= "";
// var str = "";
// var subtract1 = str.subtr(1) //subtract first number
// var subtract2 = str.subtr(2) //subtract second number

// //var beepBoopArray = function(number) {
//   if (number)
// }



// if (input.match(/[0-9]/)) {

// if (!(inputNumberStr.match(/[0-9]/))) {
//   return "Error!"; //not a number
// } else if (number > 30) {
//     return "Error, I cant count that high!";
// }
// else {
//     //first loop
//
//        return numbers[i];
//     }  else {
//          return false;
// } return results;
// //
// function checkInput(input) {

//    }
// }
