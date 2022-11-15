//Hora en tiempo real en Argentina
const puppeteer = require("puppeteer");

(async ()=>{
    try{
        const browser = await puppeteer.launch();
        //pueden ser mas de una pagina web
        const [page] = await browser.pages();
        await page.goto("https://24timezones.com/Argentina/hora");
        
        //currentTime es la forma de agarrar el id
        await page.waitForSelector("#currentTime");

        //exposeFunction es un metodo para exponer funciones
        //primero hay que pasarle como parametro un nombre que va a incrustarse en el dom
        //currentTime trabaja con un callback como segundo parametro
        await page.exposeFunction("hourArg", (currentTime)=>{
            process.stdout.cursorTo(0)
            process.stdout.clearLine(0)
            process.stdout.write(`La hora actual en Argentina es ${currentTime}`)
        })

        //tenemos que evaluar el resultado.
        await page.evaluate(()=>{
            //lo primero que necesitamos es el selecto, el currentTime
            const target = document.querySelector("#currentTime")
            const config = {subtree: true, childList: true, CharacterData: true}
            
            //nos brinda la capacidad de escucha
            const observer = new MutationObserver(()=>{
                window.hourArg(target.innerText)
            })
            observer.observe(target, config)
        })
    } catch (error){
        console.log(error)
    }
})()