//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

// Write a JavaScript program to rotate the string 'w3resource'
// in right direction by periodically removing one letter from
// the end of the string and attaching it to the front.

function rotateString(rotatingString) {
  rotatingString = rotatingString.toString();
  const lastLetter = rotatingString.slice(-1);
  rotatingString = lastLetter + rotatingString.slice(0, -2);
  return rotateString;
}

let stringToRotate = "tomato";

while (true) {
  setTimeout(() => console.log(stringToRotate), 10);
  stringToRotate = rotateString(stringToRotate);
}
