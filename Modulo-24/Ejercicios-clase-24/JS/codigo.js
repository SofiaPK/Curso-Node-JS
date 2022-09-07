/*------HERENCIA------
class Usuario {
    #password;
    constructor(email, password){
        this.email = email;
        this.#password = password;
    }
    login(email, password){
        if(email === this.email && password === this.#password){
            console.log('Inicio de sesion con éxito')
        }else{
            console.log('Autenticación fallida!')
        }
    }
    resetPassword(newPassword){
        this.#password = newPassword;
    }
    logout(){
        console.log('La sesión se cerró con éxito')
    }
}
class Autor extends Usuario{
    #numeroPost;
    constructor(email, password){
        super(email, password);
        this.#numeroPost = 0;
    }
    crearPost(contenido){
        this.#numeroPost++;
    }
    obtenerNumeroDePost(){
        return this.#numeroPost;
    }
}
class Admin extends Usuario{
    constructor(email, password){
        super(email, password);
    }
    eliminarUsuario(usuarioId){
        console.log('Usuario eliminado con exito')
    }
}

-La clase Autor y Admin usan la palabra reservada extends para heredar 
la (superclase) super la cual hace referencia a usuario
-Autor tiene metodos y propiedades especificas, lo mismo que Admin
const alejandro = new Autor('ale@gmail.com', '1234');
alejandro.login('ale@gmail.com', '1234');
alejandro.crearPost('Primer posteo');
alejandro.crearPost('Segundo posteo');
console.log(alejandro);

const admin = new Admin('ad@gmail.com', '5678');
admin.login('ad@gmail.com', '5678');
admin.resetPassword('91011');
console.log(admin);

--------POLIMORFISMO-------
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    login(email, password){
        if(email === this.email && password === this.password){
            console.log('Inicio de sesión con éxito');
        }else{
            console.log('Falló el inicio de sesión');
        }
    }
}
class Autor extends User{
    #cantidadDePosts;
    constructor(email, password){
        super(email, password);
        this.#cantidadDePosts = 0;
    }
    crearPosts(contenido){
        this.#cantidadDePosts++;
    }
    getCantidadDePosts(){
        return this.#cantidadDePosts;
    }
}
class Admin extends User{
    constructor(email, password){
        super(email, password)
    }
    //lo principal de este metodo login es anular al metodo padre
    login(email, password){
        //agregue una capa adicional de seguridad ya que esta es una cuenta de ADMIN
        const esValido = true;//podemos tener un control de seguridad de tipo 2fa, es decir
        //two factor authentication
        if(email === this.email && password === this.password && esValido){
            console.log('Admin inicia sesión con éxito')
        }else{
            console.log('Inicio de sesión fallida')
        }
    }
    eliminarUser(userID){ //userID es ficticio
        console.log('Usuario eliminado con éxito!')
    }
}
const sofia = new Autor ('so@gmail.com', '0123');
sofia.login('so@gmail.com', '0123');
console.log(sofia);
//
const admin = new Admin('ad@gmail.com', 'ad123');
admin.login('ad@gmail.com', 'ad123')
//admin.eliminarUser
console.log(admin);
//ambos heredan la clase User y ambas tienen el metodo login
//
//
//
class Usuario {
    #password;
    constructor(email, password){
        this.email = email;
        this.#password = password;
    }
}
//this trabaja siempre con el metodo, en este caso el metodo constructor
//this se puede vincular a diferentes objetos dependiendo siempre de donde se llama a la funcion
//el objeto depende de como this. se invoque
//se refiere siempre al objeto global - objeto constructor 
const mateo = new Usuario('mateo@gmail.com', '1234');
console.log(mateo) //tenemos nuestro objeto
//
//
//
let x = {
    nombre: 'Mateo',
    edad: 21,
    miFuncion(num){//poner enfasis en el uso del this.
        let resultado = num + this.edad;
        console.log(resultado)
    }
}
x.miFuncion(9)
//
//
//
--------- THIS ---------
let sumar ={
    arrayNumeros: [2,4,6,8],
    sumarDos: 2,
    sumarNumeros(){
        this.arrayNumeros.forEach((e)=>{
            console.log(e + this.sumarDos)
        }, this);
    }
}
sumar.sumarNumeros();
class Triple{
    static triple(n){
        return n * 3;
    }
}
class GranTriple extends Triple{
    static triple(n){
        return super.triple(n) * super.triple(n);
    }
}
//console.log(Triple.triple())
//indicamos al metodo clase que lo que estamos definiendo es un metodo estatico
//los metodos estaticos son llamados sin instanciar su clase
console.log(GranTriple.triple(3));
//
//
//
let nombres = {
    nombre: 'Josefina',
    edad: 22
}
console.log(nombres)
//console.log(nombres.nombre);
//console.log(nombres.hasOwnProperty('edad'));
//
//
//
*/
//------otra forma de crear objetos------
function perro(nombre, edad){
    let perrito = Object.create(ObjetoConstructor);
    perrito.nombre = nombre;
    perrito.edad = edad;
    return perrito;
}
let ObjetoConstructor = {
    ladrar: function(){
        return 'Ladrando...'
    }
}
let firulais = perro('firulais', 4);
console.log(firulais);