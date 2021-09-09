// Code of square
console.group("Square");

const sideSquare = 5;
console.log("The side of square they measure: " + sideSquare + " cm");

const perimeterSquare = sideSquare * 4;
console.log("The perimeter of square is: " + perimeterSquare + " cm");

const areaSquare = sideSquare * sideSquare;
console.log("The area of square is: " + areaSquare + " cm^2");

console.groupEnd();

// Code of triangle
console.group("Triangle");

const sideOneTriangle = 6;
const sideTwoTriangle = 6;
const baseTriangle = 4;

console.log(
  "The sides of triangle they measure: " +
    sideOneTriangle +
    " cm, " +
    sideTwoTriangle +
    " cm, " +
    baseTriangle +
    " cm"
);

const heightTriangle = 5.5;
console.log("The height of triangle is: " + heightTriangle + " cm");

const perimeterTriangle = sideOneTriangle + sideTwoTriangle + baseTriangle;
console.log("The perimeter of triangle is: " + perimeterTriangle + " cm");

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log("The area of triangle is: " + areaTriangle + " cm^2");

console.groupEnd();

// Code of circle
console.group("Circle");

// Ratio
const ratioCircle = 4;
console.log("The ratio of circle is: " + ratioCircle + " cm");

// Diameter
const diameterCircle = ratioCircle * 2;
console.log("The diameter of circle is: " + diameterCircle + " cm");

// PI
const PI = Math.PI;
console.log("The PI of circle is: " + PI);

// Circumference
const perimeterCircle = diameterCircle * PI;
console.log("The perimeter of circle is: " + perimeterCircle + " cm");

// Area
const areaCircle = ratioCircle * ratioCircle * PI;
console.log("The area of circle is: " + areaCircle + " cm^2");

console.groupEnd();
