//Array Unidimensional

//let nombres = ["Maria", "Juan", "Soledad", "Martin", "Liliana"]
            //    0        1        2           3       4
//let variosDatos = [1, true. false, "String"]

//console.log(nombres.length)

//let miMatriz = [[1,2,3], [4,5,6], [7,8,9]];

//formas de leer un Array [.]
//console.log(miMatriz[2][0]);

//Array asociativo (objeto)
//let alumno = {
//    nombre: "Maria",
//    apellido: "Lopez",
//    edad: 23,
//    altura: 1.65
//}

//Forma de leer 0bjeto (.)
//console.log(alumno.nombre + "" + alumno.apellido)

//let nombreAlumno = alumno.nombre; //accedo al objeto a traves del punto
//let edadAlumno = alumno.edad;
//let alturaAlumno = alumno.altura;

//console.log(nombreAlumno)

//let frase = `El nombre de la alumna es <b> ${nombre.Alumno}</b> <br>
//            la edad que tiene es: <b>${edadAlumno}</b> <br>
//            y su altura es: <b>${alturaAlumno}</b>`;

//se le puede poner etiquetas html

//document.write(frase)

// Tipos de Métodos para OBJETOS en JS
//  1)
// Recibe un Objeto como entrada y nos regresa un array (que lo crea) con todas las llaves (keys) de dicho objeto
//console.log(Object.keys(alumno))

//  2)
// Recibe un Objeto como entrada y nos regresa un Array con todos los valores (Values) de dicho objeto.
//console.log(Object.values(alumno))

//  3)
// Es como una fusion de Object.keys y Object.values recibe el objeto como parametro 
//y nos regresa una Matriz (padre) con arreglos individuales por cada llave valor que tenga ese objeto
// console.log(Object.entries(alumno))

/*
let empleados=[
{
    nombre: "Ana",
    apellido: "Lopez",
    edad: 18,
    altura: 1.60
},{
    nombre: "Rodrigo",
    apellido: "Gimenez",
    edad: 24,
    altura: 1.70
},{
    nombre: "Romina",
    apellido: "Sosa",
    edad: 23,
    altura: 1.65
},{
    nombre: "Andres",
    apellido: "Calamaro",
    edad: 60,
    altura: 1.77
},{
    nombre: "Luz",
    apellido: "Torres",
    edad: 21,
    altura: 1.71
}
] */

let arreglo = [1,2,3,4,5,6,7]

console.log(arreglo)

//Metodos de arrays

/* 1) --Bucle FOR
for (inicializacion; condicion; actualizacion){

}

for (let i=0; i < arreglo.length; i++){
    console.log(arreglo[i])
}

2) --While

let i= 0;
while (i < arreglo.length){
    console.log(`Indice: &{arreglo[i]}`);
    i++;
} 

3) --do WHILE

i = 0;
do{
    console.log(`Indice: ${i}`);
    //le sumo + 1
    i++;
}while (i < 10);

4) --forEach / es un metodo que no nos devuelve una nueva matriz
Lo utilizamos solo cuando necesitamos ejecutar una funcion a traves de 
cada elemento del array, sin necesidad de obtener un retorno.

arreglo.forEach(function (arreglo, index){
    console.log(`${index} : ${arreglo}`);
})

arreglo.forEach(function (arreglo, i){
    console.log(`${i} : ${arreglo}`);
})

5) --MAP
Permite recorrer el array y modificar los elementos presentes retornando un 
nuevo array con la misma longitud que el del origen

let resultadoArray = arreglo.map(element) => "Indice: " + "" + element);
console.log(resultadoArray)
*/

//Metodos para Arrays

/* 1 --PUSH
con este metodo lo que hacemos es agregar uno o mas elementos al final siempre de nuestro array
y nos devuelve un nuevo array con una nueva longitud.

console.log(arreglo.push("Push"));
console.log(arreglo)

2) --POP
elimina el ultimo elemento de un array y nos devuelve un nuevo array sin ese elemento

arreglo.pop();
console.log(arreglo);


3) -- SPLICE
cambia el contenido de un array eliminando elementos existentes o agregando nuevos elementos
*/

arreglo.splice(5, 0, "splice")
console.log(arreglo)
