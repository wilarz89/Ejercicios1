// Concatena dos o mas arrays

const  arreglo1 = ['a', 'b', 'c'];
const  arreglo2 = ['d', 'e', 'f'];

console.log(arreglo1.concat(arreglo2))
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const nombre = "Wilson "
const apellido = "Ariza "
const titulo = "sr "

const result = titulo.concat(nombre,apellido)

console.log(result);
// sr Wilson Ariza

const fila1 = [1, 2, 3];
const fila2 = [4, 5, 6];
const fila3 = [7, 8, 9];

const result1 = fila1.concat(fila2,fila3)

console.log(result1);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


const string = "un numero";
const  numero=  29;
const arreglo=[2,3,4,'5'];

const result2 = string.concat(numero,arreglo)

console.log(result2)
// un numero292,3,4,5


const num1 = [[1]];
const num2 = [2, [3]];
const num3 = [4, [5],[6,7]];
const num4 = [8, [9],[10,11],[12,13,14]];

const result4 = num1.concat(num2,num3,num4)

console.log(result4);
// [ [ 1 ],
//   2,
//   [ 3 ],
//   4,
//   [ 5 ],
//   [ 6, 7 ],
//   8,
//   [ 9 ],
//   [ 10, 11 ],
//   [ 12, 13, 14 ] ]