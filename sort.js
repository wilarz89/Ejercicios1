// ordena los elemento de un arreglo 


const numeros = [4, 5,7, 8, 9, 6,1, 2, 3];

const orden = numeros.sort();

console.log(orden)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const letras = ['f','e','d','c','a']

const alfa = letras.sort();

console.log(alfa)
// [ 'a', 'c', 'd', 'e', 'f' ]

// Se puede con funciones


const personas =[
    {name: 'Wilson',age:29},
    {name: 'Miguel',age:18},
    {name: 'Samuel',age:17},

]

const comparar = personas.sort(function(a,b){
    if (a.age > 18){
        console.log("Es mayor de edad")
        return 1;
    }
    else{
        console.log("es menor de edad ")
    }
}
)

console.log(comparar)
// Es mayor de edad
// Es mayor de edad
// es menor de edad 
// [ { name: 'Miguel', age: 18 },
//   { name: 'Samuel', age: 17 },
//   { name: 'Wilson', age: 29 } ]


const combo =['10',1,'12',2,'13',3,'14']

function resta(a,b){
    return a-b;
}
console.log(combo.sort());
console.log(combo.sort(resta));
// [ 1, '10', '12', '13', '14', 2, 3 ]
// [ 1, 2, 3, '10', '12', '13', '14' ]