//variables
//HTML element Variables
let screen = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number-button");

//Variables for add, Subtract, multiple,divide,clear button,zero and equals sign

let add = document.querySelector("#add");

let subtract = document.querySelector("#subtract");

let multiple = document.querySelector("#multiple");

let divide = document.querySelector("#divide");

let clear = document.querySelector("#clear-button");

let equals = document.querySelector("#equals");

let goBack = document.querySelector("#go-back");

//array of elements for each button that has numbers 0-9:
// let numbers = document.querySelectorAll(".number-button");

//Variable for info from the user
let valueOne = "";
let valueTwo = "";
let currentOperator = "";

//event listeners

//add event listeners to our operators (+,_,*,/)
add.addEventListener("click", function () {
  let content = add.textContent;
  currentOperator = content;
});

subtract.addEventListener("click", function () {
  let content = subtract.textContent;
  currentOperator = content;
});

multiple.addEventListener("click", function () {
  let content = multiple.textContent;
  currentOperator = content;
});

divide.addEventListener("click", function () {
  let content = divide.textContent;
  currentOperator = content;
});

equals.addEventListener("click", function () {
  console.log(doMath(valueOne, currentOperator, valueTwo));
  let answer = doMath(valueOne, currentOperator, valueTwo);
  screen.textContent = answer;
});

clear.addEventListener("click", function () {
  valueOne = "";
  currentOperator = "";
  valueTwo = "";
  screen.textContent = "0";
});

goBack.addEventListener("click", function () {
  if (valueTwo.length > 1) {
    valueTwo = valueTwo.slice(0, -1);
    screen.textContent = valueTwo;
  } else if (valueTwo.length === 1) {
    valueTwo = "";
    screen.textContent = "0";
  } else if (currentOperator !== "") {
    currentOperator = "";
  } else if (valueOne.length > 1) {
    valueOne = valueOne.slice(0, -1);
    screen.textContent = valueOne;
  } else if (valueOne.length === 1) {
    valueOne = "";
    screen.textContent = 0
  };
});

//adding event listeners to all buttons that are numbers

for (let i = 0; i < numbers.length; i++ ) {
  numbers[i].addEventListener("click", function() {
      let content = numbers[i].textContent; 
      if (currentOperator === "") {
      valueOne += content;
      console.log(valueOne, "FIRST")
      screen.textContent = valueOne
  } else {
      valueTwo += content;
      console.log(valueTwo, "SECOND")
     screen.textContent = valueTwo
  }
})
};

///functions 
function doMath(value1, operator, value2) {
  //what value does the operator have?
  if (operator === "+") {
    return Number(value1) + Number(value2);
  } else if (operator === "-") {
    return Number(value1) - Number(value2);
  } else if (operator === "×") {
    return Number(value1) * Number(value2);
  } else if (operator === "+") {
    return Number(value1) / Number(value2);
  }
}
