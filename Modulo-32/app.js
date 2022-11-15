const express = require ('express')
const mongoose = require ('mongoose')
//const User = require('./models.users')
const User = require('./models/users.js')
require('dotenv').config()
//console.log(process.env)
const app = express()
const port = process.env.PORT || 3000

//middleware
app.use(express.json())

app.get('/', (req, res)=>{
    User
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({
            message: error
        }))
})

//creamos usuarios
app.post('/', (req, res)=>{
    const user = User(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({
            message: error
        }))
})

//actualizar usuario x id
app.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {name, username} = req.body;
    User
        .updateOne({_id: id}, { $set: {name, username}})
        .then((data)=> res.json(data))
        .catch((error)=> res.json({
            message: error
        }))
})

//eliminamos usurios x ID
app.delete('/', (req, res)=>{
    const {id} = req.params;
    User
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=> res.json({
            message: error
        }))
})

//MongoDB Connection - tenemos que generar la coneccion de nuestra base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log('conectado a MongoDB Atlas'))
    .catch((error)=> console.error(error))

app.listen(port, ()=>{
    console.log(`server escuchando en puerto ${port}`)
})