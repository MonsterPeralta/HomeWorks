let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Usando el spread operator para combinar dos arrays en uno solo
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray);  // [1, 2, 3, 4, 5, 6]

// Usando el spread operator para pasar una lista de argumentos a una función
function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers));  // 6