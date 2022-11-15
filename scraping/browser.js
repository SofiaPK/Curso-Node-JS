//Este archivo contiene toda la secuencia de comandos cuando se ejecuta el navegador
//Vamos a tener que requerir puppeteer

const puppeteer = require('puppeteer');

//creamos una función asíncrona. Iniciamos el navegador y devolvemos una instancia.
async function startBrowser(){
    let browser;
    //try para controlar el inicio del navegador
    try{
        console.log('Abriendo el navegador...')
        //se usa la variable browser con el método launch
        browser = await puppeteer.launch({
            headless: false,
            args: ['--disable-setuid-sandbox'], //argumentos
            '--ignoreHTTPSErrors': true
        })
    }catch(error){
        //catch para controlar el error
        console.log('No se pudo crear una instancia del navegador')
    }
    return browser;
}


module.exports = {startBrowser};