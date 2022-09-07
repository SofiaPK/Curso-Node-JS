const { Server } = require('node:http');
const http = require('node:http');
//console.log(http)
const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.write('Bienvenide a la home..');
        return response.end();
    }
    //console.log(request.url)
    if(request.url === '/contacto'){
        response.write('Nuestros canales de contacto son...')
        return response.end()
    }
    response.write(`
    <h1>not found error 404<?h1>
    <a href='/'>Ir a la home</a>
    `)
})
server.listen(3000); //para crear el servidor siempre hay que agregar el puerto
console.log('Servidor escuchando en puerto 3000')