//variables
//HTML element Variables
let screenVariable = document.querySelector(".screen");

//Variables for add, Subtract, multiple,divide,clear button,zero and equals sign

let equals = document.querySelector("#equals");

let add = document.querySelector("#add");

let subtract = document.querySelector("#subtract");

let multiple = document.querySelector("#multiple");

let divide = document.querySelector("#divide");

let clear = document.querySelector(".clear-button");

let goBack = document.querySelector("#go-back");

//array of elements for each button that has numbers 0-9:
let numbers = document.querySelectorAll(".number-button");

//Variable for info from the user
let valueOneFromUser = "";
let valueTwoFromUser = "";
let currentOperator = "";

//event listeners

equals.addEventListener("click", function(){
  console.log (doMath(valueOneFromUser, currentOperator, valueTwoFromUser));
 let answer = doMath(valueOneFromUser,currentOperator,valueTwoFromUser);
 screenVariable.textContent = answer;
})

//add event listeners to our operators (+,_,*,/)
add.addEventListener("click", function () {
  let content = add.textContent;
  currentOperator = content;
});

subtract.addEventListener("click", function () {
  let content = subtract.textContent;
  currentOperator = content;
});

multiply.addEventListener("click", function () {
  let content = multiply.textContent;
  currentOperator = content;
});

divide.addEventListener("click", function () {
  let content = divide.textContent;
  currentOperator = content;
});

//loop over the numbers array and for each item add an event listener whose function console.log("clicked");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    let content = numbers[i].textContent;
    //console.log(numbers[i].textContent);
    //if currentOperator ==="", update the value of valueOneFromUser = + content
    if (currentOperator === "") {
      valueOneFromUser += content;
      console.log(valueOneFromUser, "FIRST number");
      screenVariable.textContent = valueOneFromUser;
    } else {
      //add code to update valueTwoFromUser
      valueTwoFromUser += content;
      console.log(valueTwoFromUser, "SECOND number");
      screenVariable.textContent = valueTwoFromUser;
    }
  });
}

//functions
function doMath(value1, operator, value2) {
  //what value does the operator have?
  if (operator === "+") {
    Number(value1) + Number(value2);
  }
}
