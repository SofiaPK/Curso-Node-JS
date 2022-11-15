//CREANDO UNA API
const express = require("express")
const app = express()
const port = 3000;

//si uso const no me funciona
let usuarios = [{
    id: 1,
    name: "Ana",
    userName: "Anita77"
},
{
    id: 2,
    name: "Roger",
    userName: "RogerFederer"
},
{
    id: 3,
    name: "Maria",
    userName: "Maria48"
}]

//para peticiones que nos llegan en json (antes se utilizaba el modulo bodyParser)
app.use(express.json())

//obtener todos los usuarios
app.get("/usuarios", (req, res)=>{
   res.json(usuarios)
})

//crear un nuevo usuario utilizando el metodo post
//con los tres ... copiamos/traemos todo el cuerpo del objeto
app.post("/usuarios", (req, res)=>{
    //console.log(req.body)
    const nuevoUsuario = {...req.body, id: usuarios.length + 1} //le agregamos una id
    //console.log(nuevoUsuario)
    usuarios.push(nuevoUsuario)
    res.send("usuario creado con exito")
})

//obtener usuario por ID
app.get("/usuarios/:id", (req, res)=>{
    const id = req.params.id
    //console.log(id)
    const usuarioEncontrado = usuarios.find(
        (usuarios) => usuarios.id === parseInt(id)
    )

    if(!usuarioEncontrado) return res.status(404).json({
        message: "el usuario no se encuentra"
    })
    res.json(usuarioEncontrado)
})

//actualizar usuarios
app.put("/usuarios/:id", (req, res)=>{
    const nuevaData = req.body
    const usuarioEncontrado = usuarios.find(
        (user) => user.id === parseInt(id) //(req.params.id)
    )

    if(!usuarioEncontrado) return res.status(404).json({
        message: "el usuario no existe"
    })

    //map crea/devuelve/modifica un nuevo array
    //por cada usuario lo comparo que sea === req.params.id
    usuarios = usuarios.map(u => u.id === parseInt(id) ? {...u, ...nuevaData} :u)
    
    res.json({
        message: "usuario actualizado correctamente"
    })
})

//eliminar usuario x id
app.delete("/usuarios/:id", (req, res)=>{
    const id = req.params.id
    const usuarioEncontrado = usuarios.find(
        (user) => user.id === parseInt(id)
    )

    if(!usuarioEncontrado)
    return res.status(404).json({
        message: "usuario no existente, imposible de eliminar"
    })

    usuarios = usuarios.filter((u)=> u.id !== parseInt(id))
    res.sendStatus(204)
})

app.listen(port, ()=>{
    console.log(`server escuchando en el puerto ${port}`);
})