/*      COMO TRATAMOS EL ESTADO Y HACEMOS PETICIONES
(() =>{
    let xhr = new XMLHttpRequest();

    console.log(xhr)
    $xhr=document.querySelector('#xhr')
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', ()=>{

        if(xhr.readyState !== 4) return;   //se ejecuta cuando el sea 4

        if(xhr.status >= 200 && xhr.status < 300){
            console.log('Satisfactoria')

            let json = JSON.parse(xhr.responseText); //convierto texto a ojeto {}
            console.log(json)

            json.forEach(e => {
                let $li = document.createElement('li'); //creo el elemento LI de html
                
                $li.textContent = `${e.name}`; //insertamos la lista

                $fragment.appendChild($li); //el fragment va a guardar toda la peticion de la URL
            })

            $xhr.appendChild($fragment);
        }else{
            //imprimer error
            console.log('ERROR')

            let msje= xhr.statusText || 'Not Found';
            $xhr.textContent = `ERROR ${xhr.status}: ${msje}` //que muestre el statustext y que lo inserte en el HTML
        }

        console.log(xhr) //imprime los 4 estados: loading, loaded, interactive, complete

    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/user')

    xhr.send()       //en fetch estos dos codigos se ejecutan de una sola vez

})();


FETCH = Mecanismo que trabaja con promesas (no con devoluciones de llamadas como con xml).
hacemos peticiones a la url pero sin tantos estadios de loading, loaded, interactive, complete, send, etc.
Es una alternativa mas moderna
Es una funcion que como entrada requiere una url o requestInfo y como respuesta nos devuelve una promesa

//console.log(fetch('https://jsonplaceholder.typicode.com/user')) //el fetch busca esta info a la url que le pasamos

fetch('https://jsonplaceholder.typicode.com/users')
    //.then((res) => console.log(res))
    .then((res) => res.json()) //una vez que hicimos el fetch la respuesta viaja y le pedimos que la ponga en un formato json
    .then((response) => console.log(response));
*/

//ejecutar una funcion anonima autoejecutable
(()=>{
    let $fetch = document.querySelector('#listado')
    $fragment = document.createDocumentFragment();
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res)
            return res.ok ? res.json() :Promise.reject(res);
        })
        .then((json) => {
            json.forEach(e => {
                const $li = document.createElement('li');
                $li.textContent=`${e.name}`;
                $fragment.appendChild($li)
            });
        $fetch.appendChild($fragment);
    })
    .catch((error)=>{
        console.log(error.status)
    })
})();


