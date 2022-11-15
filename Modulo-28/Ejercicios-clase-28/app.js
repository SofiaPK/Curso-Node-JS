
//const saludar = 'Hola Mundo';
//console.log(saludar)

//a saludar quiero agregarle un estilo que cuando lo inicialice muestre hola mundo con estilos de este npm https://www.npmjs.com/package/colors
/*en la terminal escribir:
1) npm init 
    - se le pone el nombre de nuestro proyecto con package name nos sugiere siempre por defecto entre parentesis un nombre
    -la version
    -una descripcion que queramos, tiene que ver con lo que hacemos
    -el punto de acceso (entry point) sugerido en este caso es app.js
    -test command, es para indicar comandos para realizar todo tipo de testing
    -git repositor, para crear un repositorio 
    -keywords, palabras reservadas
    -author, quien lo crea
    -license
    Esto crea un JSON con todas las descripciones indicadas: package.json (aca tenemos un
    listado descriptivo de nuestra aplicacion y otro de dependencias)

2) npm i colors - esto instala el paquete npm
    -package-lock.json NO SE DEBE TOCAR

3) para desinstalar el paquete se escribe: npm uninstall colors
*/

const colors = require('colors'); //para utilizar la dependencia, este require sin ruta va a buscar colors dentro de la carpeta de node_modules
const saludar = 'Hola Mundo';
//console.log(saludar.magenta)
//console.log(saludar.magenta.bgYellow)
console.log(saludar.rainbow)
