/*Programa ejecutivo de finanzas personales, donde el objetivo principal es desarrollar un
presupuesto personal. En este programa se ven distintos modelos de presupuesto. 
Un modelo común es el modelo 50-30-20, que consiste en repartir los ingresos de esta forma: 50% 
para los gastos necesarios, 30% para gastos opcionales y un 20% para ahorro e inversión.

Diseñar un programa en JavaScript que, recibiendo el ingreso total, muestre el monto a dedicar 
a cada una de esas categorías (gastos necesarios, gastos opcionales, ahorro e inversión).
*/

var ingresoTotal = prompt('Escriba su Ingreso Total');

var gastosNecesarios = ingresoTotal * 0.5;

var gastosOpcionales = ingresoTotal * 0.3;

var ahorroE_Inversion = ingresoTotal * 0.2;

alert('Los gastos necesarios equivalen a: ' + gastosNecesarios);
alert('Gastos opcionales equivalen a: ' + gastosOpcionales);
alert('Ahorro e inverisón equivalen a: ' + ahorroE_Inversion);
