/*CONSIGNA:
Cree una función llamada function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA.
*/
function gastoConIva(numerito){
    var iva = 1.21;
    var interes = numerito * iva
    return interes;
}
var numero = Number.parseInt(prompt('Ingrese un número'));
alert(gastoConIva(numero))

/*function gastoConIva(numerito){
    var interes = numerito * 0.21
    return interes;
}                                                               OTRA FORMA DE HACERLO
var numero = Number.parseInt(prompt('Ingrese un número'));
alert(gastoConIva(numero))

Luego crea una function llamada map() que tome dos entradas o parámetros:
-un array de como valores números. 
-una función callback: esta función se aplica a cada elemento del array (dentro de la función map().
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la 
función callback en cada elemento de la matriz de entrada.
*/

function gastoConIva(num){
    return num * 1.21;
}

function maP(array, callback){
    let resultado = [];

    for(let i = 0; i < array.length; i++){
        resultado.push(callback(array[i]))
    }
}
console.log(maP([10,20,30], gastoConIva))