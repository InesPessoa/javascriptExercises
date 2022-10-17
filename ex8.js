//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

//Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess number,
// the program will display
// a message "Good Work" otherwise display a message "Not matched".
const readline = require("readline");

//generate random number between 1 to 10;
//const randomNumber = Math.floor(10 * Math.random()) + 1; //Math random number > 0 and < 1

//users gives an input number between 1 to 10;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Does not work this approach
/** 
let invalideInputtedNumber = true;
while (invalideInputtedNumber) {
  lineReader.question(
    "Introduce a number between 1 and 10",
    (inputedNumber) => {}
  );
  try {
    inputedNumber = parseInt(inputedNumber);
    if (inputedNumber < 1 || inputedNumber > 10) {
      throw "Not in the range";
    }
    invalideInputtedNumber = false;
  } catch (err) {
    console.log(`Introduce a valid number!: ${err}`);
  }
}
**/

//https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
var recursiveAsyncReadLine = function () {
  rl.question("Introduce a number between 0 and 10: ", function (answer) {
    let valideinputtedNumber = false;
    let inputedNumber = answer;
    try {
      inputedNumber = parseInt(inputedNumber);
      if (!inputedNumber) {
        throw "Not a number";
      } else if (inputedNumber < 1 || inputedNumber > 10) {
        throw "Not in the range, [0,10]";
      } else {
        valideinputtedNumber = true;
      }
    } catch (err) {
      console.log(`Introduce a valid number!: ${err}`);
    }

    if (valideinputtedNumber) {
      const randomNumber = Math.floor(10 * Math.random()) + 1;
      if (randomNumber == inputedNumber) {
        //we need some base case, for recursion
        console.log("Good WorK!");
      } else {
        console.log("Not matched");
      }

      return rl.close();
    } //closing RL and returning from function.
    console.log('Your input was: "', answer, '"');
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine();
