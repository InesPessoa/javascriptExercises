//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

//Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

const yearMin = 2014;
const yearMax = 2050;
const day = 1;
const month = 1;
const yearSunday = [];

for (let year = yearMin; year <= yearMax; year++) {
  //create a new date 1 of january of given year
  const firstJanuary = new Date(year, month, day);

  //extract the day of the week 1 is for monday, and so on...
  const dayOfWeekIndex = firstJanuary.getDay();
  const listDays = [
    "monday",
    "tuesday",
    "wendsday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  console.log(
    `year ${year}, the 1st of january was on a ${listDays[dayOfWeekIndex]}`
  );

  //add all years that 1st of january is a sunday
  if (dayOfWeekIndex === 6) {
    yearSunday.push(year);
  }
}

console.log("years when 1st of january was a sunday: ", yearSunday);
