/*let miDominio = "midominio.com"
console.log(miDominio)

var miDomiiinio =  "midomiiinio.com"
console.log(miDomiiinio)

const myDomain = "mydomain.com"
//console.log(myDomain)
const myNumber = 1234
const myArray = [1,2,3,4]
const user = {
    nombre: 'María',
    lastName: 'Pérez'
}
console.log(myDomain, myNumber, myArray, user)

module.exports = {
    myDomain, user
}
//console.log(module)
*/
const sumar = (a, b) => a+b;
const restar = (a, b) => a-b;
const dividir = (a, b) => a/b;
const multiplicar = (a, b) => a*b;

console.log(sumar(2,4))

module.exports = [
    sumar,
    restar,
    dividir,
    multiplicar
]