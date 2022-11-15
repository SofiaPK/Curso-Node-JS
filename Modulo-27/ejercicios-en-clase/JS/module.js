/*let miDominio = "midominio.com"
//console.log(miDominio)

const myDomain = "mydomain.com"
//console.log(myDomain)

const myNumber = 1234
const myArray = [1,2,3,4]
const user = {
    nombre: 'María',
    lastName: 'Pérez'
}
//console.log(myDomain, myNumber, myArray, user)

module.exports = {
    myDomain, user
}
console.log(module)
*/

const suma = (a, b) => a+b;
const resta = (a, b) => a-b;
const divide = (a, b) => a/b;
const multiplica = (a, b) => a*b;

//console.log(sumar(2,4))

module.exports = {
    suma,
    resta,
    divide,
    multiplica
}