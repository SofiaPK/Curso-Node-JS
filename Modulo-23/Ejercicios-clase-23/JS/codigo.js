/*POO
let usuario = {
    nombre: 'Yoko',
    nombreUsuario: 'yoko_97',
    contraseña: '1234',
    login: function(nombreUsuario, contraseña){
        if(nombreUsuario === this.nombreUsuario && contraseña === this.contraseña){
            console.log('Login con exito')
        }else{
            console.log('Datos incorrectos')
        }
    }
}
usuario.login('yoko_97', '1234');
*/
//CLASES : es un modelo de una entidad en la vida real. Describe como es el objeto: propiedades, 
//caract. y metodos (aquellas acciones que puede realizar el objeto).
//en si no podemos realizarle ninguna accion a la clase.
/*
class usuario{
    #password; //esto es una propiedad privada
    constructor(name, nombreUsuario, password){
        this.name = name;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
    login  (nombreUsuario, password){
        if(nombreUsuario === this.nombreUsuario && password === this.password){
            console.log('Login con exito')
        }else{
            console.log('Datos incorrectos')
        }
    }
    setPassword(newPassword){
        this.#password = newPassword;
    }
}
let yoko = new usuario('Yoko', 'yoko_97', '01234');
//console.log(yoko)
yoko.login('yoko_97', '01234');
yoko.setPassword('56789'); //forma de utilizar la propiedad privada, accedemos a ella y le pasamos por parametro la nueva contraseña
console.log(yoko.name)
*/
class Usuario{
    name;
    email;
    #password;
    constructor(){}

    #validarEmail(email){
        return true;
    }
    #validarPassword(password){
        return true;
    }
    singUp(name, email, password){
        let esValidado = false;
        esValidado = this.#validarEmail(email);
        esValidado = this.#validarPassword(password);

        if(esValidado){
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log('usuario registrados con exito!!!') //agregar usuario a db
        }else{
            console.log('ingrese los campos correctos')
        }
    }
    login(email, password){
        if(email === this.email && password === this.#password){
            console.log('inicio de sesion con exito')
        }else{
            console.log('error de inicio de sesion')
        }
    }
    #usuarioRegistrado(email){
        return true;
    }
    resetPassord(email, newPassword){
        if(this.#usuarioRegistrado(email)){
            this.password = newPassword;
            console.log('Nueva contraseña regustrada')
        }else{
            console.log('No se encuentra ninguna cuenta asociada')
        }
    }
}
let yoko = new Usuario();
//console.log(yoko) aca aparece todo sin definir
yoko.singUp('Yoko', 'yoko@hotmail.com', '1234');
//yoko.#validarEmail('y@gmail.com') esta forma de error, se tienen que usar los setter o getter
yoko.login('yoko@hotmail.com', '1234')
yoko.resetPassword('yoko@gmail.com', '5678');
//console.log(yoko)