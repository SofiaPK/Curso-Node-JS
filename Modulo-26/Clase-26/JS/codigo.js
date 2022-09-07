/*-----Persistencia de datos-----
Como podemos guardar u obtener ciertos tipos de datos en el navegador

---Local Storage---
La interfaz de almacenamiento de la API de almacenamiento web proporciona acceso al
almacenamiento de la sesión o al almacenamiento local para un dominio particular, lo que le
permite, por ejemplo, agregar, modificar o eliminar elementos de datos almacenados.

El session storage es temporal y perdemos los datos, el global storage no pasa. Session 
storage y local storage son especificos del protocolo de la pagina.

Los objetos de almacenamiento son simples almacenes de clave-valor, similares a los
objetos, pero se mantienen intactos a través de las cargas de página. Las claves y los
valores son siempre cadenas (tenga en cuenta que las claves enteras se convertirán
automáticamente en cadenas, al igual que lo hacen los objetos). Puede acceder a estos
valores como un objeto o con los métodos Storage.getItem () y Storage.setItem (). Estas
tres líneas establecen la entrada colorSetting de la misma manera

-----getItem-----
Este metodo, cuando se le pasa un nombre de clave, devolverá el valor de esa clave

localStorage.setItem('Bienvenide!', 'Hola Mundo!');  //setItem para almacenar la info
localStorage.setItem('esValid', true);
localStorage.setItem('unNumero', 7);
let msje = localStorage.getItem('Bienvenide!');    //al getItem siempre hay que pasarle la key
let bandera = localStorage.getItem('esValid');
let numero = localStorage.getItem('unNumero');
console.log(msje); 
console.log(bandera);      //consologuea a todos tipo string
console.log(numero);

----Session Storage----&--setItem---
Permite acceder a un objeto de almacenamiento de sesion para el origen actual (ej. si cerramos la sesion, perdemos toda la info)
sessionStorage.setItem('Seleccionados', [1,2,3,4,5,6,7]); //la variable se almacena en el navegador hasta que le usuarie cierre la ventana
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'karen@gmail.com');

let lista = sessionStorage.getItem('Seleccionados').split(','); //el split divide el objeto en cadena 
console.log(lista); //con el split la lista pasa de ser string a object
let bandera = sessionStorage.getItem('esValido') == 'true'; //el tipo de dato es string y para convertirlo en booleano tengo que pasarle un true
console.log(bandera);
let email = sessionStorage.getItem('email'); //string
console.log(email);

//no es recomendable trabajar con ciertos datos que hagan correr riesgos a nuestra aplicacion porque hay eventos
//que modifican el storage
//localStorage.numeroPrueba = 7; esto no es recomendable hacer
let clave = 'toString'
for(let 1 = 0; 1 <localStorage.length; 1++){
    let clave = local.localStorage.key(1);
    console.log(`Clave: ${clave}`);
    console.log(`Valor: ${localStorage.getItem(clave)}`);
}
localStorage.removeItem('numeroPrueba') //para quitar
localStorage.clear(); //para limpiar toda la info almacenada
sessionStorage.clear();
*/

const producto01 = {
    id: 01,
    producto: 'Arroz',
    precio: '120'
}
localStorage.setItem('producto01', producto01); //guardar el objeto
//console.log(producto01);
const enJSON = JSON.stringify(producto01) //string
localStorage.setItem('producto01', enJSON);//transformar el obj en string
