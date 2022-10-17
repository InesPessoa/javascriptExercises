//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

//Write a JavaScript program to find the area of a triangle
//where lengths of the three of its sides are 5, 6, 7

function calculaeArea(side1, side2, side3) {
  const s = (side1 + side2 + side3) / 2;
  const area = (s * (s - side1) * (s - side2) * (s - side3)) ** (1 / 2);
  return area;
}

const area = calculaeArea(5, 6, 7);
console.log(area);
