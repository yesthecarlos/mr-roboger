// Utility Functions

// Business Logic


//make an array containing each integer from 0 to userInput
//except numbers that contain a 1 are replaced with "Beep!" (UNLESS the number contains a 2 or a 3),
//numbers that contain a 2 are replaced with "Boop" (UNLESS the number contains a 3) and 
//numbers that contain a 3 are replaced with "Won't you be my neighbor?"
//
// beepBoopRobo ()

// function makeArray() {
const userInput = 40;
let integerArray = [];
for (let index = 0; index <= userInput; index += 1){
  integerArray.push(index);
}
integerArray;

let stringArray = integerArray.toString().split(",");

// function replaceThreefunction(element, i, array) {
//   if (stringArray.includes("3", 0)) array[i] = "Won't you be my neighbor?";
//   }
let finalArray = [];
stringArray.forEach(function(element) {
  if (element.includes("3")) {
    finalArray.push("Won't you be my neighbor?");
  } else if (element.includes("2")) {
    finalArray.push("Boop!");
  } else if (element.includes("1")) {
    finalArray.push("Beep!");
  } else {
    finalArray.push(element);
  }
});

finalArray;



// stringArray.forEach(("3", index) => stringArray[index] = "Won't you be my neighbor?");

// let modifiedStringArray = stringArray.replace("3", "Wont you be my neighbor?");

// function replaceThree(element, index, array) {
//   if (element == "3") array[index] = "Won't you be my neighbor?";
// }
// stringArray.forEach(replaceThree);
// stringArray
//   if (stringArray.includes("3")) {
//     stringArray.val() = "Wont you be my neighbor?"
//   }
// })
// integerArray.String.prototype.replace("2", "Boop!");
// integerArray.String.prototype.replace("1", "Beep!");

// // }

// integerArray.forEach(function() {

// });

// UI Logic