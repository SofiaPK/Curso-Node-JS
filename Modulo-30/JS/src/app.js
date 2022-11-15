const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const usoRouter = requiere('./router/index.js')

/*settings */
app.set('')

/*Middleware - siempre van antes que las rutas */
app.use((req,res,next)=>{
    console.log('una nueva solicitud recibida en ' + Date.now());
    next();
})
/* utilizando morgan como logger(registrador)*/
app.use(morgan('dev'))

app.use(usoRouter)

app.get('/', (req, res)=>{
    res.send('Hola usuario!')
})

app.get('/', (req, res)=>{
    res.send('Home page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})