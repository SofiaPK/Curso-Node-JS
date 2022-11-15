//proporciona utilidad para trabajar con rutas
//siempre nos va a devolver la salida sin importar el uso de la barra diagonal /
const path = require('node:path');
const filePath = path.join('/public', '/styles', '/main.css') //join para unir las propiedades que le vamos a pasar
console.log(filePath); //nos devuelve la ruta completa
//console.log(path.basename(filePath)) //nos trae el archivo main.css - devuelve la ultima parte de un path
//console.log(path.dirname(filePath)); //sin el ultimo archivo
//console.log(path.parse(filePath)) //devuelve un {}
console.log(path.resolve('style')) //resolve resuelve una secuencia de ruta absoluta
