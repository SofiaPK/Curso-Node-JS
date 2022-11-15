//Sintaxis del enroutamiento: app.METHOD(PATH, HANDLER)
const express = require('express');
const app = express(); //express es una funcion que la vamos a utilizar
const port = process.env.PORT || 3000; //si solo le pongo 3000 defino el puerto donde va a estar corriendo el servidor. 
//process.env.PORT esta es una variable de entorno, si no la encuentra, que utilice la 3000

/*La peticion http representada por el objeto req tiene propiedades para la cadena 
de consulta de la solicitud (podemos agregarle parametros tanto al cuerpo como al encabezado).
El objeto res representa la respuesta y envia una aplicacion express cuando recibe una solicitud del framework
app.get('/', (req, res)=>{
    res.send('Hola mundo');
})

a lo ultimo siempre se le pone el puerto. Se usa el metodo listen, el cual es una 
funcion que inicia al puerto para que escuche todas las solicitudes que se le hagan 
al servidor (en este ej esta en el puerto 3000)
app.listen(port, ()=>{
    console.log(`ejemplo app escuchando en el puerto ${port}`)
})
*/

/*
app.get('/', (req, res)=>{
    res.send('home')
})

app.get('/contact', (req, res)=>{
    res.send('contact page')
})

app.get('/about', (req, res)=>{
    res.send('about')
})

app.get('*', (req, res)=>{
    res.send('Error 404! esta es una URL no válida')
})

app.listen(port, ()=>{
    console.log(`ejemplo app escuchando en el puerto ${port}`)
})
*/

const {infoCars} = require('./MOCK_DATA')

const routerCars = express.Router();
app.use('/api/carlist', routerCars) //esta es una forma correcta de guardar todo en una variable

app.get('/', (req, res)=>{
    res.send(JSON.stringify(infoCars))
})

routerCars.get('/nationals', (req, res)=>{
    res.send(JSON.stringify(infoCars.nationals))
})

app.get('/api/carlist/imported', (req, res)=>{
    res.send(JSON.stringify(infoCars.imported))
})

/*
el objeto req.params tiene propiedades asignadas. los parametros, representados por :, no son parte de la URL, son utilizados para asignar la ruta
: parametro url
(req.params)
ejemplo: app.get('/imported/:car', (req,res)=>{}

app.get('/imported/:car', (req,res)=>{
    const car = req.params.car; //como tenemos un parametro (car) 

    const resultado = infoCars.imported.filter(cars => cars.car === car) //aca entro al array de importados, como es array me aparecen todos los metodos del array

    if(resultado.length === 0){
        return res.status(400).send(`No se encontraron autos de ${car}, por favor utilice mayúscula en la primer inicial`)
    }    

    if(req.query.ordenar === 'year'){ //agregamos query params
        return res.send(JSON.stringify(resultado.sort((a,b) => b.year - a.year))) //esto es una forma de ordenar los elementos.
    }

    res.send(JSON.stringify(resultado))
})

La url para probarlo seria http://localhost:3000/imported/Ford?ordenar=year
*/

app.get('/imported/:car/:model', (req,res)=>{
    const car = req.params.car; 
    const model = req.params.model;

    const resultado = infoCars.imported.filter(cars => cars.car === car && cars.model === model) //el parametro incluye el auto y el modelo

    if(resultado.length === 0){
        return res.status(400).send(`No se encontraron autos de ${car} de modelo ${model}`)
    }
    
    if(req.query.ordenar === 'year'){ //agregamos query params
        return res.send(JSON.stringify(resultado.sort((a,b) => a.year - b.year))) //esto es una forma de ordenar los elementos
    }

    res.send(JSON.stringify(resultado))
})

app.get('*', (req, res)=>{
    res.send('Error 404! esta es una URL no válida')
})

app.listen(port, ()=>{
    console.log(`ejemplo app escuchando en el puerto ${port}`)
})

//La URL para probarlo seria http://localhost:3000/imported/Ford/Ranger
//cuando hay ? en una URL es porque esta haciendo una consulta
//query.params siempre se maneja con clave valor