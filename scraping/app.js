
const browserObject = require('./browser')
const scraperController = require('./pageController')

//que inicie el navegador y que cree una instancia de navegacion
let browserInstance = browserObject.startBrowser();

//el app tiene 4 lineas de codigo para estar separado de los demas archivos
//pasamos la instancia del navegador(browser) al controlador.
scraperController = (browserInstance)


