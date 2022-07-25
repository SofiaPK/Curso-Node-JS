var flujoDeCaja = [
    {'mes': 'enero', 'ingreso': '1500', 'egreso': '1500'},
    {'mes': 'febrero', 'ingreso': '2500', 'egreso': '2500'},
    {'mes': 'marzo', 'ingreso': '84683', 'egreso': '1155'},
    {'mes': 'abril', 'ingreso': '135353', 'egreso': '1533'},
    {'mes': 'mayo', 'ingreso': '1535', 'egreso': '5434'},
    {'mes': 'junio', 'ingreso': '4343354', 'egreso': '5434543'},
    {'mes': 'julio', 'ingreso': '435453', 'egreso': '4543'},
    {'mes': 'agosto', 'ingreso': '78351', 'egreso': '7816'},
    {'mes': 'septiembre', 'ingreso': '1878', 'egreso': '95634'},
    {'mes': 'octubre', 'ingreso': '48483', 'egreso': '9433'},
    {'mes': 'noviembre', 'ingreso': '35483', 'egreso': '53133'},
    {'mes': 'diciembre', 'ingreso': '3843', 'egreso': '348133'}
];

// hacer:
// 1. sumar todos los ingresos
// 2. sumar todos los egresos
// 3. comparar suma de ingresos > suma de egresos

var dineroIngresado = 0;
var dineroEgresado = 0;

for (var i = 0; i < flujoDeCaja.length; i++){     //for = unica forma de iterar una lista con elementos
    dineroIngresado += parseInt(flujoDeCaja[i].ingreso )
    dineroEgresado += parseInt(flujoDeCaja[i].egreso )
}

if (dineroIngresado > dineroEgresado){
    alert('El flujo de dinero genera ganancias');
} else {
    alert('El flujo de dinero genera pérdidas');
}