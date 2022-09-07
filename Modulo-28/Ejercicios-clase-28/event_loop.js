/*console.log('primera tarea');
console.log('segunda tarea');
console.log('tercera tarea');
setTimeout(()=>{
    console.log('cuarta tarea')
}, 1500)*/
/*
const http = require ('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Home')
        return res.end()
    }
    if(req.url === '/contacto'){
        //blocking code
        for(let i=0; i < 10000; i++){
            console.log(Math.random()*1)
        }
        res.write('CONTACTO')
        return res.end()
    }
    res.end(`not found error 484`)
})
server.listen(3000) */
console.log(`server on port 3000`)