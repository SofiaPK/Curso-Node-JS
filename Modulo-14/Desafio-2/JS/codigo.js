//función que reciba el array de inversiones y retorne un array agregando a cada ítem el campo “interés” con la fórmula correspondiente.

var creditos = [
    {nombre: 'plan001', capital: 150000, plazo: 30, tasa: 0.15},
    {nombre: 'plan002', capital: 300000, plazo: 180, tasa: 0.10},
    {nombre: 'plan003', capital: 485000, plazo: 60, tasa: 0.23},
];

var resultado = []

for (var i = 0; i < creditos.length; i++){
    var valor = (creditos[i].capital * creditos[i].plazo * creditos[i].tasa)/100
    var operacion = 'Al '.concat(creditos[i].nombre.concat(" le corresponde un credito de " + valor))

    resultado.push(operacion);
}

console.log(resultado);