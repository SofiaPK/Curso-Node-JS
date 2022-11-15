const express = require('express')
const router = express.Router();

router.get('/nuevaRuta', (req, res)=>{
    res.send('nueva Ruta con modulo router')
})

module.exports = router;