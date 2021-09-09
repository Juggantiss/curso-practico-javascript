// Code of square
console.group("Square");

const perimeterSquare = (side) => side * 4;

// console.log("The perimeter of square is: " + perimeterSquare + " cm");

const areaSquare = (side) => side * side;

// console.log("The area of square is: " + areaSquare + " cm^2");

console.groupEnd();

// Code of triangle
console.group("Triangle");

const perimeterTriangle = (sideOne, sideTwo, base) => sideOne + sideTwo + base;

// console.log("The perimeter of triangle is: " + perimeterTriangle + " cm");

const areaTriangle = (base, height) => (base * height) / 2;

// console.log("The area of triangle is: " + areaTriangle + " cm^2");

console.groupEnd();

// Code of circle
console.group("Circle");

const diameterCircle = (ratio) => ratio * 2;

// console.log("The diameter of circle is: " + diameterCircle + " cm");

const perimeterCircle = (ratio) => diameterCircle(ratio) * Math.PI;

// console.log("The perimeter of circle is: " + perimeterCircle + " cm");

const areaCircle = (ratio) => ratio ** 2 * Math.PI;

// console.log("The area of circle is: " + areaCircle + " cm^2");

console.groupEnd();
