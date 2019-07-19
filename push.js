// agrega elementos al arreglo

const letras = ['f','e','d','c','a']

const add = letras.push('aa','bb');

console.log(letras)
console.log(add)

// [ 'f', 'e', 'd', 'c', 'a', 'aa', 'bb' ]
// 7


const numeros = [4, 5,7, 8, 9, 6,1, 2, 3];

const add2 = numeros.push(11,1000,111);

console.log(add2)
console.log(numeros)
// 12
// [ 4, 5, 7, 8, 9, 6, 1, 2, 3, 11, 1000, 111 ]


const numsYletras = [1,2,3,4,5,6,7,8,9,10,'f','e','d','c','a']
const add3= numsYletras.push(1,'1',50,'cincuenta');

console.log(add3)
console.log(numsYletras)
// 19
// [ 1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   'f',
//   'e',
//   'd',
//   'c',
//   'a',
//   1,
//   '1',
//   50,
//   'cincuenta' ]