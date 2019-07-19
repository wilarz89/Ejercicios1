// mapea en un nuevo arreglo con resultados de lo que tenga un arrelgo
const numeros = [4, 5,7, 8, 9, 6,1, 2, 3];

const mapa = numeros.map(multiply);
function multiply(a){
    let x = a
    return x*x;
}

console.log(mapa)
// [ 16, 25, 49, 64, 81, 36, 1, 4, 9 ]

const squares = [ 16, 25, 49, 64, 81, 36, 1, 4, 9 ]

const root = squares.map(Math.sqrt)
console.log(root)
// [ 4, 5, 7, 8, 9, 6, 1, 2, 3 ]






