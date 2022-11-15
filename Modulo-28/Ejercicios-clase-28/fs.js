/*------- R-E-P-L --------
Cuando podemos en la terminal node nos da la bienvenida y nos dice la
version que tenemos de node Si queremos mas info ponemos .help. Esto seria
la consola de node, esta sesion justamente nos da la caracteristica global
de node.js.

-----------FILE SYSTEM-----------
siempre la utilidad es poder importar archivos usando la sig. sintaxis:*/
const fs = require("fs");
const {title} = require('process');
//console.log(fs)

//para leer archivos
const primero = fs.readFileSync('./data/primero.txt', 'utf-8')//tengo que pasarle el path y el encoding (tipo de archivo)
//console.log(primero);

//para crear archivos
fs.writeFileSync('./data/segundo.txt', 'Segundo archivo txt');

const segundo = fs.readFileSync('./data/segundo.txt', 'utf-8')
//fs.writeFileSync('.data/segundo.txt', title, {
//    flag: 'a'
//})

fs.readFile('./data/primero.txt', (error, data)=>{
    //console.log(error)

    if(error){
        console.log(error)
    }
    console.log(data.toString())
})

/*
-------CALLBACK HELL----- ESTO ES LO QUE NO HAY QUE HACER
fs.readFile('./data/primero.txt', 'utf-8', (error, data)=>{
    if(error){
        console.log(error)
    }
    console.log(data.toString())
    fs.readFile('./data/segundo.txt', 'utf-8', (error, data)=>{
        if(error){
            console.log(error)
        }
        console.log(data.toString())
    })
})
*/