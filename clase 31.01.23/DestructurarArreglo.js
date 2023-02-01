let numbers = [1, 2, 3];

// Destructuración de un array
let [a, b, c] = numbers;
console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3

//// Destructuración de un array, omitiendo algunos valores

let numbers = [1, 2, 3, 4, 5];

let [a, , c, , e] = numbers;
console.log(a);  // 1
console.log(c);  // 3
console.log(e);  // 5


//Ejemplo de clase

const {name: university,city}  = {name: 'Autonoma', city: 'Cali'}

console.log(a)
console.log(university)