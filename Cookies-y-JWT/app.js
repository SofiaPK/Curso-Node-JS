/*import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cookieParser())

app.get('/', (req, res)=>{
    res.send('Hola Home')
})

app.get('/setcookies', (req, res)=>{
    //mandamos la respuesta pasandole un string como nombre y despues el valor que tiene que ser otro string
    res.cookie('name', 'soycookie',{
        //fijamos el tiempo con maxAge
        //maxAge: 10000,
        expires: new Date('2022-11-07'),
        //es un booleano seteado en file, para traerlo se usa true, sirve para acceder a la cookie desde el objeto Document
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })
    res.send('seteando cookies')
})

//leer cookies
app.get('/getcookie', (req, res)=>{
    console.log(req.cookies)
    res.clearCookie('name')
    res.send('cookie eliminada')
})

app.listen(3000)
console.log('servidor corriendo en el puerto 3000')*/

/*
const express = require ('express');
const session = require('express-session');

const app = express()

app.use(session({
    secret: '1234',
    resave: true,
    saveUninitialized: true
}))

Realizar un programa backend que permita inyectar cookies en el frontend.
Para ello definir una ruta llamada "set-cookie" que reciba por query params el nombre
de la cookie, su valor y el tiempo de duracion en segundos.
Ademas, debe existir un endpoint 'clear-cookie' que permita borrar una cookie por
su nombre. Considerar el mismo formato de error descrito anteriormente.
Nota 1: si no se establece el nombre y el valor, el servidor devovlerá un objeto de error.
Ej: {error: 'set cookie: falta nombre o valor'}.
Nota 2: si el tiempo no está presente, generar una cookie sin tiempo de expieración.
En las dos rutas anteriores, si el proceso es correcto, devolver el objeto {proceso: 'ok}
Por último, generar una ruta 'get-cookies' que permita leer las cookies presentes y
devolverlas al frontend.


app.get('/', (req, res)=>{
    req.session.user = 'Sofi Admin';
    req.session.role = 'Admin';
    req.session.views = req.session.views ? ++req.session.views : 1  // si tengo valor, le sumo 1, sino lo asigno en 0 como inicial
    res.send(`El user ${req.session.user}, con el rol de ${req.session.role}, ingreso a la web ${req.session.views} veces`)
})

app.get('/set-cookie', (req, res) => {
    if (!req.query.cookieName || !req.query.valor) {
        return res.send({error: 'set-cookie: falta nombre o valor'})
    }

    res.cookie(req.query.cookieName, req.query.valor, {maxAge: req.query.tiempo})
    res.send('cookie guardada')
})

app.listen(3000, (req, res)=>{
    console.log('servidor escuchando en puerto 3000...')
})
*/

const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config/config') //se usa la contraseña maestra
const app = express(); //uso e inicializo express

//middleware
const recursoProtegido = express.Router();

app.set('llave', config.llave) //seteo para que el body-parser convierta la cadena que viene del lado del cliente

//el body-parser hay que pasarlo a formato json
//esto porque los datos viajan por la url ??
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Ruta principal - Home para tener de referencia
app.get('/', (req, res)=>{
    res.send('Bienvenide')
})

//preparar la ruta para que la persona usuaria
app.post('/auth', (req, res)=>{
    if(req.body.user === 'luna' && req.body.password === '1234'){
        const payload = {
            check: true
        };
        //el token es lo que genera 
        const token = jwt.sign(
            payload, 
            app.get('llave'),
            {expiresIn: '10s'}
        );
        //la respuesta siempre se configura en formato json
        res.json({
            mensaje: 'auth ok',
            token: token,
        });
    }else{
        res.json({
            mensaje: 'Incorrect User or password',
        });
    }
});

//middleware
recursoProtegido.use((req, res, next)=>{
    const token = req.headers['acceso-token']
    //console.log(token)
    //console.log(decoded.foo)
    if(token){
        jwt.verify(token, app.get('llave'), (err, decoded)=>{
            if(err){
                return res.json({
                    mensaje: 'Invalid token'
                })
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }else{
        res.send({
            mensaje: 'Token no proveido'
        })
    }
})

//ruta con data privada
app.get('/datosprivados', recursoProtegido, (req, res)=>{
    const db = [
        {
            id: 1,
            name: 'ana'
        },
        {
            id: 2,
            name: 'juana'
        },
        {
            id: 3,
            name: 'viviana'
        }
    ]
    res.json(db)
})

//Servidor ON
app.listen(3000, ()=>{
    console.log('Servidor iniciado en el puerto 3000')
})