// Ask the user for a number
var num1 = prompt()
// Convert number type
num1 = Number(num1);
//var number = prompt(number);
var num2 = prompt()
//Ask for second number
num2 = Number(num2);

//Convert second number

// Use a function to calculate the the average of the two numbers
function average (num1, num2) {
  var numaverage = (num1 + num2) / 2
  console.log(numaverage);
}

//console.log the average of the two numbers
//console.log(number);
average(num1, num2);