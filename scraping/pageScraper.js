/*Acá creamos un objeto al cual le pasamos una propiedad URL (la URL de la página a la cual le deseamos extraer los datos) 
y un método scraper() (el cual contiene el código que realiza la extracción de los datos).

Acá se ejecuta toda la secuencia de comandos de extracción de datos*/

const scraperObject = {
    url: 'https://books.toscrape.com/',
    async scraper(browser, category){ //el primer parametro es el navegador, el segundo la categoria elegida dentro de la pagina
        let page = await browser.newPage(); //con newPage() creamos la instancia
        //console.log(`{$this.url}`)
        await page.goto(this.url); //con esto navegamos a la pagina seleccionada
        let selectedCategory = await page.$$eval(
            '.side_categories > ul > li > ul > li > a',
            (links, _category)=>{ //seleccionamos la categoria de libro para mostrar
            links = links.map((e) => (e.textContent === _category ? e : null)) //buscamos el texto coincidente
            console.log(links);
            return links.href; //aca traemos un array
        },
        category
        );
        //navegamos a la categoria seleccionada
        await page.goto(selectedCategory);

        //creamos otra funcion asincrona que espera a que se procese el DOM requerido
        async function scraperCurrentPage(){
            //pagina/articuloSeleccionado
            await page.wairForSelector('.page_inner')
            let urls = await page.$$eval('section ol > li', links =>{
                //asegurarnos que el libro esté en stock
                links = links.filter(link => link.querySelector('.instock.availability > 1').textContent !== 'In stock')
                //entramos a los enlaces
                links = links.map(el => el.querySelector('h3 > a').href)
                return links
            })

            let pagePromise = (link) => new Promise(async(resolve, reject)=>{
                let dataObj = {};
                let newPage = await browser.newPage();
                await newPage.goto(link);
                dataObj['bookTitle'] = await newPage.$eval('.product_main > h1', (text) => text.textContent);
                dataObj['bookPrice'] = await newPage.$eval('.price_color', (text) => text.textContent);
                dataObj['noAvailable'] = await newPage.$eval('.instock.availability', (text) => text.textContent);

                resolve(dataObj);
                await newPage.close();
            });

            for(link in urls){
                let currentPageData = await pagePromise(urls[link]);
                srapedData.push(currentPageData);
            }

            let nextButtonExist = false;
            try{
                const nextButton = await page.$eval('.next > a', a.textContent)
                nextButtonExist = true;
            }catch(err){
                nextButtonExist = false;
            }
            if(nextButtonExist){
                await page.clik('.next > a')
                return scraperCurrentPage();
            }
            await page.close()
            return scrapedData;

        }
        let data = await scraperCurrentPage();
        console.log(data)
        return data
    },
}

module.exports = scraperObject;