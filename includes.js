// Determina si incluye o no un elemento
const  arreglo1 = ['a', 'b', 'c'];
const  arreglo2 = ['d', 'e', 'f'];

const result1 = arreglo1.includes('a')
const result2 = arreglo2.includes('a')

console.log(result1);
console.log(result2);
// true
// false


const fila1 = [1, 2, 3];
const fila2 = [4, 5, 6];
const fila3 = [7, 8, 9];

const result3 = fila1.includes('1')
const result4 = fila1.includes(1)
console.log(result3);
console.log(result4);
// false
// true 

const string = "un numero";
const arreglo=[2,3,4,'5'];

const result5 = string.includes('un');
console.log(result5)
// true

const result6 = arreglo.includes(5);
const result7 = arreglo.includes('5');
console.log(result6)
console.log(result7)
// false
// true