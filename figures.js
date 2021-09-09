// Code of square
console.group("Square");

const perimeterSquare = (side) => side * 4;

const areaSquare = (side) => side * side;

console.groupEnd();

// Code of triangle
console.group("Triangle");

const perimeterTriangle = (sideOne, sideTwo, base) => sideOne + sideTwo + base;

const areaTriangle = (base, height) => (base * height) / 2;

console.groupEnd();

// Code of circle
console.group("Circle");

const diameterCircle = (ratio) => ratio * 2;

const perimeterCircle = (ratio) => diameterCircle(ratio) * Math.PI;

const areaCircle = (ratio) => ratio ** 2 * Math.PI;

console.groupEnd();

// Here to interact with HTML

const calculatePerimeterSquare = () => {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const perimeter = perimeterSquare(value);

  alert(perimeter);
};

const calculateAreaSquare = () => {
  const input = document.getElementById("InputSquare");
  const value = input.value;

  const area = areaSquare(value);

  alert(area);
};
