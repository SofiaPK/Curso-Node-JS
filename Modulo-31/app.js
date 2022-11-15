const express = require('express')
const app = express();
const port = 8080;

const frase = 'hola mundo como estan'

app.get('/', (req, res)=>{
    res.send('Hola mundo');
})

app.get('/api/getFrase', (req, res)=>{
    res.send(frase);
})

app.get('/api/getLetra/:num', (req, res)=>{
    //console.log(req.params.num);
    const num = req.params.num
    
    //res.send(frase.substring(parseInt(num) -1, parseInt(num)))
    
    const text = frase.split('').join('');
    const resul = text.charAt(num);
    res.send(resul)
})

app.get('/api/getPalabra/:num', (req, res)=>{
    const a = frase.split(' ');
    const opcion = parseInt(req.params.num);

    if(opcion < 0 || opcion >= 4){
        return res
         .status(400)
         .json({message: 'no esta dentro de los parametros permitidos'})
    }
    res.status(200).send(a[opcion]);
});

app.listen(port, ()=>{
    console.log(`Puerto escuchando en ${port}`)
});