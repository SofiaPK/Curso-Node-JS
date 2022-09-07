/* ------PATRONES DE DISE˜NO--------
Soluciones documentadas para problemas comunes. Permite obtener beneficios como una 
velocidad de desarrollo rapido, reutilizacion de codigo, LOS PATRONES PUEDEN SER EXPRESIVOS (ESTRUCTURA ESTABLECIDA)
*/
//
//
/*
-------SINGLETON-------
Asegura que una clase tiene una unica instancia y proporciona un punto de acceso global a dicha instancia.
Se usa para crear conexiones de base de datos configuranto un registrador para una aplicacion (siempre un registro unico).
Las cosas relacionadas con la configuracion deben ejecutarse solo una vez y deben reutilizarse hasta que la aplicacion este activa.
Tiene comod esventaja exponer la instancia de nuestro objeto al contexto global de la aplicacion dejando que sea modificada en cualquier momento.
Se debe estar 100% segure de que solo se va a necesitar una instancia para toda la aplicacion
class Oficina {
    constructor(nombre, numEmpleades){
        this.nombre = nombre
        this.numEmpleades = numEmpleades
        
        if(typeof Oficina.instance === 'object'){ //si esta creada la instancia, retorno el objeto
            return Oficina.instance;
        }
        Oficina.instance = this; //asignamos this a la instancia
        return this;  //lo retornamos al final
    }
}
const oficina01 = new Oficina('Oficina01', 25)
console.log(oficina01)

const oficina02 = new Oficina('Oficina02', 50) // SINGLETON no permite crear mas de una instancia de una clase
console.log(oficina02)  //esto se muestra en la consola como 0ficina01
*/
//
//
/*
--------Observer Pattern-------
Se define como un patron de comportamiento, es un patron responsable por la 
comunicacion entre los objetos.
Permite la notificacion a objetos subscriptores u observadores al cambio de otro
objeto (publicador)
class publicador{
    constructor(){
        this.subscriptores = []; //creamos un array vacio para llenarlo con los suscriptores
    }
    subscribe(subscriptor){
        this.subscriptores.push(subscriptor);
    }
    unsubscribe(subscriptor){
        this.subscriptores = this.subscriptores.filter( 
        (item) => item !== subscriptor
        )
    }
    notify(event){ //itera sobre cada uno de los subs y se encarga de invocarlos en el event
        this.subscriptores.forEach((item) => {
            console.log(item)
            item.buzon((item, event))
        });
    }
}
class subscriptor{
    constructor(id, name){
        this.id = id;
        this.name = name;
        console.log(`Se ha creado un nuevo subscriptor: ${this.id} con el nombre de ${this.name}`);
    }
    buzon(edicion){
        console.log(`Subscriptor numero: ${this.id} recibió una nueva edicion: ${edicion}`);
    }
}
const periodico = new publicador();
const antonio = new subscriptor(1, 'Antonio');
const isabel = new subscriptor(2, 'Isabel');
const ana = new subscriptor(3, 'Ana');
//
console.log('---Primera Edicion---');
periodico.subscribe(antonio);
periodico.subscribe(isabel);
periodico.notify('Nueva Edicion');
//
console.log('---Segunda Edicion---');
periodico.subscribe(ana);
periodico.notify('Segunda Edicion')
//
console.log('---Tercera Edicion---');
periodico.unsubscribe(antonio);
periodico.notify('Tercera Edicion');
*/
//
//
/*
---------PATRON MODULO--------
const LIBRARY = {
    API: async(url = "", params = {}) =>{
        const urlAPI = new URL(url);
        urlAPI.search = new URLSearchParams(params).toString();
        return await (await fetch(urlAPI)).json();
    }
};
(async()=>{
    const result = await LIBRARY.API(
        "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(result);
    console.log(LIBRARY)
})();
*/
//
//
/*------------DESAFIO CLASS (POO)-------------
Crear 2 clases:
-una clase madre llamada class Vehiculo() que tenga las propiedades de nombre
y velocidad, ademas de dos metodos publicos llamados acelerar() incrementando 
la velocidad en 10 y el otro frenar() bajando la velocidad en 10 y un metodo 
mas que se llame get aceleramos() que nos calcule las millas (velocidad/1.6).
-una subclase llamada class Camion() que tenga una propiedad privada que se
llame combustible. Implementar el metodo acelerar() que la velocidad en el
camion aumente de 5 y reste de 2 al combustible cada vez que este metodo se
utilice. Y un ultimo metodo llamado cargarCombustible() que ingrese por 
parametro el porcentaje de la carga que le apliquemos. (USAR HERENCIA)

class Vehiculo{
    constructor(nombre, velocidad){
        this.nombre = nombre;
        this.velocidad = velocidad;
    }
    acelerar(){
        this.velocidad += 10;
    }
    frenar(){
        this.velocidad -= 10;
    }
    getAceleremos(){
        this.velocidad = this.velocidad / 1.6;
    }
}
console.log(`-Vehiculo-`)
const autito = new Vehiculo('suzuki', 2)
//console.log(autito)

class Camion extends Vehiculo{
    #combustible;
    constructor(nombre, velocidad, combustibleX){
        this.#combustible = combustibleX;
    }
}
*/
//
//
class Persona01{
    nombre01 //propiedad publica fuera del constructor
    edad01 //propiedad publica fuera del constructor
    constructor(n, e){
        this.nombre01 = n;
        this.edad01 = e;
    }
}
const ana = new Persona01('Ana', 22);
console.log(ana)

class Persona02{
    #nombre
    edad
    constructor(n, e){
        this.nombre = n;
        this.edad = e;
    }
    getNombre(){
        return this.#nombre;
    }
    #presentarInterno(){
        console.log('Nombre: ' + this.#nombre);
    }
    presentar(){
        this.#presentarInterno();
    }
}
const juana = new Persona02('Juana', 21);
juana.presentar;
