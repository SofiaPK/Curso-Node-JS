var unaEdadAle = prompt('Alejandro ingrese su edad')

function edad(){
    if (unaEdadAle == 28){
        alert('Esa es tu edad')
    } else{
        alert('MMM seguro que tenes esa edad que ingresas?')
    }
}

edad(18)
edad(24)
edad(28)

//---------------------

var edadDeSofi = 24 // edad de sofi ❤️

function calcularEdad(unaEdad){
    if (unaEdad == 28){
        alert('es tu edad')
    } else{
        alert('no es tu edad')
    }

    alert('la edad de sofi es ' + edadDeSofi)
}
calcularEdad(18);
calcularEdad(24);
calcularEdad(28);

//---------------------

// armar una funcion reconocerNombre que reciba una lista de nombres
// y si la lista contiene el nombre "Ale" que haga un alert y diga "encontre el nombre". Sino, que no haga nada.
function reconocerNombre(unaLista) {
    for (var i = 0; i < unaLista.length; i++) {
        var element = unaLista[i];
        if (element === 'Ale') {
            alert('encontre el nombre')
        }
    }
}

var miLista = ['Sofi', 'Juan', 'Ale']
reconocerNombre(miLista)
reconocerNombre(['asd', 'eeee'])

/*
Ejercicio:

Hacer una funcion encontrarMenor que dada una lista de numeros, imprima en pantalla el numero mas chico.
*/

function encontrarMenor(unaLista){

    var menorHastaElMomento = unaLista[0]

    for (var i = 0; i < unaLista.length; i++) {

        var elemento = unaLista[i];

        if(elemento <= menorHastaElMomento){
            menorHastaElMomento = elemento
        }
    }
    document.write('El numero mas chico es ' + menorHastaElMomento);
}

var lista1 = [2, 1, 4, 1, 9]
encontrarMenor(lista1)

var lista2 = [2, 1, -3, 9]
encontrarMenor(lista2)

var lista3 = [240]
encontrarMenor(lista3)
 