/*
API:
conjunto de definiciones y protocolos que se utiliza para desarrollar 
e integrar el software de las aplicaciones, permitiendo la comunicación 
entre dos aplicaciones de software a través de un conjunto de reglas.


SPA (sigle page application o una aplicacion de pagina unica):
    da a los usuarios una experiencia mas fluida, como una aplicacion de escritorio
    el path de la URL no tiene el mismo cambio que se genera como con otras web (? CONFUSO

        LO QUE VA A CAMBIAR ES LA VISTA, NO HAY PAGINA

    el codigo js, html y css se carga todo junto de una sola vez

History Api:
    permite manipular la info del historial de sesion del cliente
    para la pestaña o frame en el que actualmente se encuentra navegando

    su interfaz se encuentra como propiedad de window en window.history

    *state: representa el estado de navegacion correspondiente al estado actual de la URL y la posicion de sesion
    de historial del cliente de la pestaña actual

    *pushstate: permite agregar info a la sesion del historial del cliente. se puede especificar
    un titulo, cache y url
    history.pushState(any state, string title, string url)

    el usuario nunca se va a ir de nuestra pagina

    *popstate: se dispara cada vex que el usuario intenta retroceder o avanzar 
    en su historial usando cualquiera de los métodos disponibles :
    ● Botones atrás y adelante en la barra de navegación
    ● Las combinaciones de teclas Ctrl+> / Ctrl+<
    ● Usando los métodos back() y forward() de la misma API

    *replace state: modifica la entrada del historial actual reemplazandola con el objeto de estado y la 
    url pasada en los parametros del metodo. Es util cuando se quiere modificar el state object o url del
    actual historial en respuesta a cierta accion del usuario
    replaceState(stateObj, unused)
    replaceState(stateObj, unused, url)

*/

const back = document.querySelector('#back');
const go = document.querySelector('#go');
const next = document.querySelector('#next');

const home = document.querySelector('#home');
const producto = document.querySelector('#producto01');
const productoActual = document.querySelector('#producto02');
const contactos = document.querySelector('#contactos');
const faqs = document.querySelector('#faqs')



back.addEventListener('click', (e)=>{
    //console.log(e);
    history.back();
})

next.addEventListener('click', (e)=>{
    history.forward();
})

go.addEventListener('click', (e)=>{
    let numero = parseInt(prompt('Ingrese un numero'));
    history.go(); //el go pide que le pasemos un dato de tipo NUMBER, lo que hace es especificar el historial de la sesion, hay que crear una variable y pasarle el numero
})

home.addEventListener('click', (e)=>{
    history.pushState({
        page: 'home'
    },
        'home',
        '/home'
    );
})

producto.addEventListener('onclick', (e)=>{
    history.pushState({
        page: 'productos',
        productos: [
            {id: 01,
            nombre: 'tomate',
            cantidad: 50}
        ,
            {id: 02,                           //acordarse que hay que pasarle los 3 parametros
            nombre: 'lechuga',
            cantidad: 30}
        ]
    },
    'producto',
    '/producto'
    );
})

window.addEventListener('popstate', (e)=>{
    console.log('POP STATE', history.state);
})

productoActual.addEventListener('click', (e)=>{
    history.replaceState(
        {
            page: 'producto',
            productos:
            [
                {id: 01,
                nombre: 'tomate',
                cantidad: 50}
                ,
                {id: 02,                           //acordarse que hay que pasarle los 3 parametros
                nombre: 'lechuga',
                cantidad: 30}
                ,
                {id: 03,
                nombre: 'pepino',                  //elimina el ultimo en el historial
                cantidad: 15}
            ]
        },
        'producto',
        '/producto actual'
    )
})

/*
REST API:
- se creo como una guia para administrar una red compleja de internet y la comunicacion cliente-servidor
protocolo de transferencia de dato
conjunto de restricciones y propiedades basadas en HTTP o HTTPS (donde viaja la info encriptada y asegura los datos)

RESTFUL:
los serivcios web RESTful brindan interoperabilidad entre los sist informaticos de internet.
hace referencia a un serivicio web que va a implementar la arquitectura basada en REST
es una interfaz que los sistemas utilizan para intercambiar la info


SERVICIOS SOAP: exponen sus propios conjuntos arbitrarios de operaciones. NO lo vamos a tocar en el curso. 

URI: Identificador de recursos uniformes. 
es una cadena de caracteres para identificar recursos. se puede 
identificar por el nombre(urn), locacion (url) o ambas.

PARAMETROS: para filtrar, ordenar, paginar o buscar informacion en un recurso se debe 
hacer una consulta sobre la URI, utilizando los parametros HTTP en lugar de incluirlos en la misma.
osea usar parametros de la misma forma en que los usamos en formularios HTML, y no que ellos 
formen parte de la URI ?

METODOS:
GET
POST
DELET
PATCH


*/