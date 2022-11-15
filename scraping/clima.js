//obtener la temperatura de una ciudad
const puppeteer = require("puppeteer");

(async()=>{
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    await loadUrl(page, "https://www.clima.com/argentina/neuquen/neuquen", browser)
})()

async function loadUrl(page, url, browser){
    await page.goto(url, {
    waitUntil:["load", "domcontentloaded", "networkidle0", "networkidle2"]
    })
    const valorEncontrado = await page.$eval('.ctib-text', el => el.innerHTML)
    await console.log(`La temperatura de Neuquen es de ${valorEncontrado}`)

    await browser.close();
}