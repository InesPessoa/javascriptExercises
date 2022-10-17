//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

//Write a JavaScript program to get the current date.  Go to the editor
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
const date = new Date();

const month = date.getMonth();
const day = date.getDay();
const year = date.getFullYear();

const stringDate =
  `${month}-${day}-${year}, ${month}/${day}/${year}` +
  ` or ${day}-${month}-${year}, ${day}/${month}/${year}`;

console.log(stringDate);
