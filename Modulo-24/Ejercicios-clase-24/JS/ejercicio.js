/*Consigna
cree una clase llamada factura, donde tenga un metodo constructor que
contenga los siguientes nombres como propiedades: numero de comprobante,
razon social, fecha de emision, producto, cantidad, precio, importe total.
Luego inicializar una instancia factura con argumentos para el caso*/
class Factura{
    constructor(numComprobante, razonSocial, fechaEmision, producto, cantidad, precio, importeTotal){
        this.numComprobante = numComprobante;
        this.razonSocial = razonSocial;
        this.fechaEmision = fechaEmision;
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.importeTotal = importeTotal;
    }
}
const facturaGenerada = new Factura('01','indeterminado','29-08','luz','1','1.987','1.987');
console.log(facturaGenerada);