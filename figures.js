// Code of square
console.group("Square");

const perimeterSquare = (side) => side * 4;

const areaSquare = (side) => side * side;

console.groupEnd();

// Code of triangle
console.group("Triangle");

const perimeterTriangle = (sideOne, sideTwo, base) =>
  sideOne + (sideTwo + base);

const areaTriangle = (base, height) => (base * height) / 2;

console.groupEnd();

// Code of circle
console.group("Circle");

const diameterCircle = (ratio) => ratio * 2;

const perimeterCircle = (ratio) => diameterCircle(ratio) * Math.PI;

const areaCircle = (ratio) => ratio ** 2 * Math.PI;

console.groupEnd();

// Here to interact with HTML

// Square
const calculatePerimeterSquare = () => {
  const inputSide = document.getElementById("InputSquare");
  const side = inputSide.value;

  const perimeter = perimeterSquare(side);

  alert(perimeter);
};

const calculateAreaSquare = () => {
  const inputSide = document.getElementById("InputSquare");
  const side = inputSide.value;

  const area = areaSquare(side);

  alert(area);
};

// Triangle
const calculatePerimeterTriangle = () => {
  const inputOne = document.getElementById("InputTriangleSideOne");
  const sideOne = Number(inputOne.value);

  const inputTwo = document.getElementById("InputTriangleSideTwo");
  const sideTwo = Number(inputTwo.value);

  const inputBase = document.getElementById("InputTriangleBase");
  const base = Number(inputBase.value);

  const perimeter = perimeterTriangle(sideOne, sideTwo, base);

  alert(perimeter);
};

const calculateAreaTriangle = () => {
  const inputBase = document.getElementById("InputTriangleBase");
  const base = Number(inputBase.value);

  const inputHeight = document.getElementById("InputTriangleHeight");
  const height = Number(inputHeight.value);

  const area = areaTriangle(base, height);

  alert(area);
};

// Circle
const calculatePerimeterCircle = () => {
  const inputRatio = document.getElementById("InputCircle");
  const ratio = inputRatio.value;

  const perimeter = perimeterCircle(ratio);

  alert(perimeter);
};

const calculateAreaCircle = () => {
  const inputRatio = document.getElementById("InputCircle");
  const ratio = inputRatio.value;

  const area = areaCircle(ratio);

  alert(area);
};
