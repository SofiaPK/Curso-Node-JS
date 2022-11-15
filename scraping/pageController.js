/*acá controlamos todo el proceso de extracción de nuestros datos (hecho en PageScraper.js).
utilizamos la instancia del navegador para controlar a PageScraper.js*/
const pageScraper = require ('./pageScraper')
const fs = require('fs')

async function scraperAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        let scrapedData = {};
        scrapedData['Travel']= await pageScraper.scraper(browser, 'Travel');
        await browser.close();

        //creo el JSON con la data scrapeada
        fs.writeFile('data.json', JSON.stringify(scrapedData), 'utf-8', function(err){
            if(err){
                return console.log(err)
            }
            console.log('Los datos han sido scrapeados y guardados con éxito.')
        })

    }catch(err){
        console.log('No se pudo resolver la instancia', err)
    }
}

module.exports = (browserInstance)=>scraperAll(browserInstance)