// Utility Functions

// Business Logic

// beepBoopRobo ()

// function makeArray() {

let integerArray = [];
for (let index = 0; index <= userInput; index += 1){
  integerArray.push(index);
}
integerArray;

let stringArray = integerArray.toString().split(",");

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

// UI Logic

$(document).ready(function(){
  $("form#roboForm").submit(function(event){
    event.preventDefault();
    const userInput = $("#numberInput").val();
    const roboAnswer = finalArray;
    $("#output").html(roboAnswer);
  });
});