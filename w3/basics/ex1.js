//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR
//Javascript_basics ex1

//Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
const date = new Date();
const dayOfWeek = date.getDay();
let hours = date.getHours();
const timeOfDay = hours > 12 ? "PM" : "AM";
hours = hours > 12 ? hours - 12 : hours;
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`Today is: ${weekday[dayOfWeek]}`);
console.log(`Current time is: ${hours} ${timeOfDay} ${minutes} ${seconds}`);
