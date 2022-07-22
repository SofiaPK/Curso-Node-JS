//let edad = prompt('Ingrese su edad')
//console.log(edad);

//Tipo de dato primitivo
//let soyUnBooleano = true;
//let soyUnBoolean01 = false;

//Operadores logicos:
// !== Estrictamente distinto
// && (y - and)
// \\ (o - or)
// ! (no)

//let numero1 = 10;
//let numero2 = 20;
//respuesta = numero1 < numero2;
//alert(respuesta)

// Estructuras condicionales
//if - else if - if  son palabras reservadas

//let edad = Number(prompt("ingrese su edad"));
//if (edad >= 18){
//    console.log("Tienes 18 año o más")
//}else if ((edad == 18) || (edad >15)){
//    console.log("Usted tiene entre 18 y 15 años")
//}else if ((edad == 14) (edad >=10)){
//    console.log("Tenes entre 10 y 15 años")
//}else{
//    console.log("Usted tiene menos de 10 años")
//}

//let nombre = prompt("Ingrese su nombre");
//let edad = Number(prompt("ingrese su edad"));
//console.log("Bienvenide" + nombre + "de" + edad + "años.");
//let suma = edad + 5;
//console.log(suma)

//let edad = parseInt(prompt("ingrese su edad"));
//console.log(edad)

//Condicionales anidados
//if (edad >=20){
//    let nombre = prompt('ingrese el nombre')
//    if(nombre == 'pedro'){
//        console.log('hola pedro, tu tienes 20 años o mas')
//    }else{
//        console.log('usted tiene +20años pero NO es pedro!')
//    }else{
//        console.log('usted tiene 19 años o menos')
//    }
//}

//Switch - condicional multiple
//let mascota = "Sin mascota";
//switch (mascota){
//    case "iguana":
//        console.log("tengo una iguana");
//        break;
//    case "perro":
//        console.log("tengo un perro");
//        break;
//    case "loro":
//        console.log("tengo un loro");
//        break;
//    case "gati":
//        console.log("tengo un gato");
//        break;
//    default:    (si no es todas las anteriores)
//     console.log("no tengo mascota");
//        break;
//}

//let fecha = new Date();

//Capturo con el metodo getElementById
let nuevoTitulo = document.getElementById('title');
console.log(nuevoTitulo)
//Inserto y redefino en nuestro html
nuevoTitulo.innerHTML = 'TituloNuevo';