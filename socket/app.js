const path = require('path'); //para los directorios, rutas tanto relativas como absolutas
const express = require('express');
const app = express();

//requerimos socket.io
const SocketIO = require("socket.io");

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), ()=>{
    console.log('Puerto escuchando', app.get('port'))
})

//servidor
const io = SocketIO(server)

//home
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public'))
})

//conexion
io.on('connection', (socket)=>{
    //cada vez que recargamos la pagina o abrimos una nueva, toma una nueva id
    //el id se genera despues de cada reconexion
    //dos pestañas diferentes del navegador tienen id diferentes
    //el socket prevalece mientras tengamos los dos clientes abiertos
    console.log(socket.id);

    let roomid = socket.handshake.query.roomid;
    console.log(roomid)

    //recibir un mensaje del cliente
    socket.on('message', (data)=>{
        //establecemos la transmision de los datos del evento a todos los socket excepto al remitente
        socket.broadcast.emit('message', data);
    })
})
