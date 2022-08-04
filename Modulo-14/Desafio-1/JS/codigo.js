/*Todo este ejercicio, funciona una sola vez, y no se puede reutilizar. Si cambia el flujo de caja, tenemos quevolver a escribir otro programa.

Ejercicio:
Armar una funcion, que reciba como parametro un flujo de caja (previamente armado), y evalue las ganancias de la misma manera. 
Pero como es una funcion, no nos sirve un alert. La funcion debe devolver 3 posibles valores:
-1 si hubo perdidas
0 si no hubieron perdidas
1 si hubo ganancias.*/

//Mejorar la usabilidad de los ejercicios de los desafíos del módulo 13.
//función que reciba un flujo de caja como dato de entrada y retorne -1 si hay
//pérdidas, 1 si hay ganancias, 0 si los ingresos son iguales a las ganancias.



function reciboFlujo(flujillo){
    var dineroIngresado = 0;
    var dineroEgresado = 0;

    for (var i = 0; i < flujillo.length; i++){  
        dineroIngresado += flujillo[i].ingreso
        dineroEgresado += flujillo[i].egreso
    }

    if (dineroIngresado > dineroEgresado){
        return 1;
    }
    else if (dineroIngresado == dineroEgresado){
        return 0;
    } 
    else {
        return -1;
    }
}

var flujoDeCaja = [
    {mes: 'enero', ingreso: 1500, egreso: 1500},
    {mes: 'febrero', ingreso: 2500, egreso: 2500},
    {mes: 'marzo', ingreso: 84683, egreso: 1155},
    {mes: 'abril', ingreso: 135353, egreso: 1533},
    {mes: 'mayo', ingreso: 1535, egreso: 5434},
    {mes: 'junio', ingreso: 4343354, egreso: 5434543},
    {mes: 'julio', ingreso: 435453, egreso: 4543},
    {mes: 'agosto', ingreso: 78351, egreso: 7816},
    {mes: 'septiembre', ingreso: 1878, egreso: 95634},
    {mes: 'octubre', ingreso: 48483, egreso: 9433},
    {mes: 'noviembre', ingreso: 35483, egreso: 53133},
    {mes: 'diciembre', ingreso: 3843, egreso: 348133}
];
alert(reciboFlujo(flujoDeCaja));