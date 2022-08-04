/* ASINCRONIA
JS Se conforma de una conducta asincroma:
console.log('Hola 1');
console.log('Hola 2');
console.log('Hola 3');  se lee de arriba hacia abajo

se lee como un unico hilo

JS emplea un modelo asincronico no bloqueante con loop de ventos
de unico hilo para sus interfaces de entrada y salida

concurrencia: dos o mas tareas ocurren al mismo tiempo

paralelismo: cuando dos o mas tareas se ejecutan a la misma vez

bloqueante" el control no es devuelto a la aplicacion, no vuelve al hilo
hasta que la bloqueante termine

no bloqueante: devuelve con independencia del resultado

OPERACION SINCRONICA Y BLOQUEANTE
(()=> {
    console.log('inicio de programa');
    function uno (){
        console.log('tarea 1');
        dos();
        console.log('tarea 3');
    }
    function dos (){
        console.log('tarea 2');
    }

    uno();
    console.log('fin programa');
})();

OPERACION ASINCRONA NO BLOQUEANTE
(()=>{
    console.log('inicio de programa asincronico');

    function uno(){
        console.log('tarea 1');
        dos();
        console.log('tarea 3');
    };

    function dos(){
        setTimeout(()=>{
        console.log('tarea 2')
        }, 5000) // es para generar una especie de temporizador para que ejecute una funcion con retraso
    };

    uno();
    console.log('fin programa asincronico')
})();                                          //no bloquea el hilo (motor propio de js), va
                                                  a ejecutar tarea, microtareas y renderizado


EVENT LOOP? - SET TIME OUT                                              
setTimeout(function(){
    console.log('Esto deberia aparecer primero')
}, 0);
console.log('Sorpresa!')


setTimeout(function(){
    console.log('50')
}, 500);
setTimeout(function(){
    console.log('10')
}, 1000);
setTimeout(function(){
    console.log('150')
}, 1500);
console.log('Sorpresa!');


-----Operacion bloqueante: el control no es devuelto a la aplicacion(hilo) hasta que
la llamada bloqueante termine.
    ej: console.log();

-----No bloqueante: la llamada es devuelta con independencia de su resultado
    ej: setTimeOut

Operaciones de entrada y de salida

-----MECANISMOS ASINCRONOS
-Callbacks
-Promises
-Async / Await

-----AJAX
Es asincrono JavaScript y XML (lenguaje de marcado uniforme que se usa para el transporte y almacenamiento de datos para la comunicacion con el servidor)
utiliza conjuntamente varias tecnologias html, xhtml, css, js, dom, xml, xslt
Es una tecnica que permite la comunicacion con otros servicios para obtener get, put, post, delete
Va a funcionar con los protocolos http y https
Va a comprender HTML (para presentacion) y XHTML (desuso), CSS (para las presentaciones), XML (para el intercambio de datos),
XSLT (para manipular los datos), JS (para unir todas las tecnologias)

------XMLHttpRequest Api
proporciona una forma facil de obtener info de una URL sin tener que recargar una pagina completa
Tiene 5 estadios:
0 - UNSENT
1 - OPENED 
2 - HEADERS_RECEIBED no inicializando
3 - LOADING
4- 


(()=>{
    let xhr = new XMLHttpRequest();  //Instanciamos el objeto


    xhr.addEventListener('readystatechange', ()=>{ //manejamos el estado del objeto que estamos creando
    
        if(xhr.readyState !== 4) return; //solamente ejecutamos cuando es 4, cuando el objeto cumpla los 4 estadios

        let json = JSON.parse(xhr.responseTEXT); //obtengo data del array
        console.log(json);                //recorro el array y pintar los elementos
        
        json.forEach(element => {  //crear una lista para pintar la info
            let $li = document.createElement('li'); //creo lista
            $li.innerHTML = `${element.name}`; //insertar lista
            
            $fragment.appendChild($li); //guardo estructura y hago una sola insercion al dom optimizando el rendimiento de mi aplicacion
            
        });

       $xhr.appendChild($fragment); //incorporar la lista a la vista

    });

    console.log(xhr); //imprime estados

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    
    xhr.send();
})();

forma de manipular la variable del dom poniendo $, ej:
$xhr = document.querySelector('#xhr');
fragment: objeto que almacena todos los datos
$fragment = document.createDocumentFragment();
*/


(()=>{
    let xhr = new XMLHttpRequest(); 
    $xhr = document.querySelector('#xhr');
    $fragment = document.createDocumentFragment();
    
    xhr.addEventListener('readystatechange', ()=>{

        if(xhr.readyState !== 4) return;

        let json = JSON.parse(xhr.responseText);
        console.log(json);

        if(xhr.status >= 200 && xhr < 300){

            console.log('correcta')

            json.forEach(element => {
                let $li = document.createElement('li'); 
                $li.innerHTML = `${element.name}`;
                $fragment.appendChild($li); 
            });
            
        }else{
            console.log('error')
        }


       $xhr.appendChild($fragment);

    });

    console.log(xhr);

    xhr.open('GET', "https://jsonplaceholder.typicode.com/users")
    
    xhr.send();
})();
