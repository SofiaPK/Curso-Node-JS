/*----NODE---- v.18.8
Es un entorno en tiempo de ejecucion para js
Extiende su capacidad del lado del servidor. Entonces el lenguaje js que veniamos trabajando lo vamos 
a ejecutar del lado del servidor, es decir del lado donde esta alojado nuestro sitio web.
Vamos a usar js para el backend en vez del frontend

Node esta constuido con un motor v8, el que utiliza chrome. Es un modelo de ES6 sin bloqueo.
Trabaja con todo lo que es la sincronia y no se va a bloquear cuando tenga una solicitud sino que
va a pasar a la siguiente solicitud. Espera siempre a que ocurra el evento.

----NPM---- v. 8.18
Ayuda a administrar los paquetes para Node

----Diferencias principales de Node y la consola del navegador - cómo interactúa con el navegador ----
Con el navegador tenemos objetos globales que son window y document (propios del navegador). Con Node interactuamos 
directamente con el sistema operativo.
En la consola:
* node - para inicializar - bienvenides...version...
* process - es el objeto global que proporciona informacion sobre node.
* podemos entrar a los objetos como: process.version, process.version.v8,
os.userInfo() para ver info del sistema operativo, process.cwd() para saber en que carpeta estamos.

Node es un entorno, codigo abierto (cualquiera puede desarrollar sobre ese codigo), multiplataforma (porque
permite ejecutar nuestra aplicacion en diferentes sistemas operativos, de esta forma tenemos un contenido 
dinamico de aplicaciones/paginas web)

Antes de mostrar la info al usuario, con node ya la preparariamos para que se la envie.

El entorno de ejecucion de nodejs esta diseñado para eventos asincronos y aplicaciones escalables
Es muy facil de integrar con los protocolos HTTP, lo que hace que sea mas facil el manejo/montado de aplicaciones web
en el caso de que tengamos muchas entradas y salidas de datos.

Desventajas:
Ofrece menor potencia de calculo que otros lenguajes puros backend, como por ej JAVA
Genera un tipo de inestabilidad de las APIs, las cuales cambian a intervalos frecuentes y 
no permanecen estables.
*/
//con control + l limpiamos la consola
//para cancelar control + c
/*
----OBJETOS GLOBALES NODE.JS----
1) __dirname // sin el archivo
console.log(__dirname) 

2)console.log(__filename) // con el archivo

3)module // referencia al modulo actual {}
console.log(module)

4) required // importamos modulos y devuelve {}
console.log(require)

5) process // info del sistema operativo

6) setInterval // ejecuta codigo ASYNC
setInterval(()=>{
    console.log('setInterval despues de 2.5 segundos')
},2500) //siempre se pasa el callback y despues los milisegundos

7) setTimeout // 
setTimeout(()=>{
    console.log('setTimeout despues de 5 segundos')
}, 5000)
*/
