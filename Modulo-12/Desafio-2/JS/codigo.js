
/*
do{
    usuario = prompt("Ingrese su nombre de usuario");
    clave = Number.parseInt(prompt("Ingrese su contraseña numerica"));
} while(confirm("Por favor seleccione la palabra aceptar o la palabra ok para ingresar"));
document.write("Bienvenide " + usuario + "!");
*/

var usuario = prompt("Ingrese su nombre de usuario");
var clave = Number.parseInt(prompt("Ingrese su contraseña"));
if (usuario == 'admin' && clave == "1234"){
    document.write('Bienvenide ' + usuario + '!');
} else {
    alert("ERROR!");
}