//Metodo math, lo que hacemos es devolver algoritmos muy por arriba, devolver diferentes valores
//Math.floor devuelve el mayor entero

console.log(Math.floor(45.99))

//BUSQUEDA BINARIA != secuencial

let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

function busqBinaria(array, item){
    let baja = 0;
    let alta = array.length -1;

    while (baja <= alta){
        let media = Math.floor((baja + alta)/2);

        let adivinar = array[media];

        if(adivinar == item){
            return media
        }
        if(adivinar > item){
            alta = media - 1;
        }else{
            baja = media + 1;
        }
    }
    return -1;
}
console.log(busqBinaria(a, 'b'))