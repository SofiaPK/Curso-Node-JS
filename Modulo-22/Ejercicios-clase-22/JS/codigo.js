/*---REPASO 
CALLBACK
es una forma de manejar el comportamiento asincrono
estas funciones se comportan como un objeto

let lista = 1;
function agregarNum(CALLBACK) {
    setTimeout(()=>{
        lista += 1
        CALLBACK()
    }, 1500);
}

agregarNum(()=>{
    console.log(lista)
})

agregarNum(()=>{
    console.log(lista)
    agregarNum(()=>{        //ineficiencia para el codigo!!!!
        console.log(lista)   //no aumenta la performance del programa
        agregarNum(()=>{        //no es eficaz, consume muchos recursos
            console.log(lista)
            agregarNum(()=>{
                console.log(lista)
            })
        })
    })
})


----------PROMESAS:
sirven para reducir el uso exclusivo de callbacks 
el resolve esta muy vinculado con el metodo .then y el reject con el metodo catch

//let promesa = new Promise(function(resolve){});
console.log(promesa)

//let promesa = new Promise (function (resolve, reject){
    let suma = 1 + 4; //da el mensaje exito
    //let suma = 1 + 3; esto daria el mensaje error porque la operacion no es igual a 5
    if(suma === 5){
        resolve('Exito');
    }else{
        reject('Error');
    }
});
promesa.then(function(msje){
    console.log(msje)
}).catch(function(error){
    console.log(error)
});

//const operacionAsincronaConPromesa = (num1, num2) =>{
    let resultado = num1 + num2;                         //funcion asincrona con promesa que por parametro le paso dos enteros que los va a sumar
    return new Promise (resolve =>{                      //va a retornar una promesa
        setTimeout(()=>{
            resolve(resultado)
        }, 1500)
    })
}
operacionAsincronaConPromesa(1, 3) //aca le paso los parametros 
    .then(res => console.log(res)) //que lo muestre por consola

ASYINC AWAIT es otra forma de escribir promesas de una manera sincronica
const cargarDatos = async () =>{ //le tenemos que indicar donde ir a buscar los datos asincronos
    const url = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(url);
    //console.log(res);
    const data = await res.json();
    //console.log(data);
}
cargarDatos();

let x = {
    nombre: 'mateo',
    edad: 21,
    miFuncion(num){
        let resultado = num + this.edad;
        console.log(resultado)
    }
}
x.miFuncion(4)

//USO ASYNC/AWAIT CON MANEJO DE ERRORES
const cargarDatos = async () =>{
    try{
        const url = ('https://jsonplaceholder.typicode.com/users');
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
cargarDatos();

-----OBJETO GEOLOCATION
*/

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0    
}
function exito(){
    let crd = pos.coords;
//    console.log('La posicion actual es: ');
//    console.log('Latitud: ' + crd.latitude);
//    console.log('Longitud: ' + crd.longitude);
}
function error(){
    console.warn('ERROR(' + err.code + '): ' + err.message);
}
navigator.geolocation.getCurrentPosition(exito, error, options)