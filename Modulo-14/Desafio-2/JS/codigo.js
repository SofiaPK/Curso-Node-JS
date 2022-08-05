//función que reciba el array de inversiones y retorne un array agregando a cada ítem el campo “interés” con la fórmula correspondiente.

/*
 - mundo de la definicion de funcion
 */
function calcularInteres(listaDeInversiones){
    for (var i = 0; i < listaDeInversiones.length; i++){
        var interes = (listaDeInversiones[i].capital * listaDeInversiones[i].plazo * listaDeInversiones[i].tasa)/100
        // guardo *interes* en 
        listaDeInversiones[i].interes = interes
    }

    return listaDeInversiones;
}

/*
 - el mundo del uso de la funcion. 
 - aca defino variables a usar. llamo a la funcion, las veces que quiera.
 */


var creditosInver = [
    {nombre: 'plan001', capital: 150000, plazo: 30, tasa: 0.15},
    {nombre: 'plan002', capital: 300000, plazo: 180, tasa: 0.10},
    {nombre: 'plan003', capital: 485000, plazo: 60, tasa: 0.23},
];


var miInteres = calcularInteres(creditosInver)
console.log(miInteres);
