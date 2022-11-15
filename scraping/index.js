/*el scraping lo que hace es extraer datos de un sitio web

puppeteer es una librería que sirve para generar el trackeo de la 
data de los sitios web de donde vamos a sacar la informacion.
Basicamente es leer paginas web desde un codigo y obtener datos.
*/

//requiero puppeteer
const puppeteer = require("puppeteer");

//funcion anónima.
//arrancamos con un proceso asíncrono
(async()=>{
    //launch es un método que inicia la instancia del navegador, va a devolver siempre 
    //una promesa, la cual debe asegurarse con los bloques de try y catch o then y await.
    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage()
    
    //Creamos una funcion asincrona pasandole como parametro un string que es una url
    await loadUrl(page, "https://www.dolarhoy.com/cotizaciones", browser)

})();

async function loadUrl(page, url, browser){
    //que espere por la pagina la promesa goto()
    //esta es la página que pasamos por url
    await page.goto(url,{
        //aca tendrian que estar todos los waitsUntil
        waitUntil:["load", "domcontentloaded", "networkidle0", "networkkidle2"]
    })
    //armo un queryselector
    const valorEncontrado = await page.$eval(".venta > .val", el => el.innerHTML); //que espere por el valor porque dentro de la pagina voy a seleccionar un valor el cual en este caso es una clase
    await console.log(`Dolar Blue precio venta: ${valorEncontrado}`);
    await browser.close(); //cerramos el navegador
}
//cuando pasamos la url hay que pasarle con el esquema http
