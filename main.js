//2DA PREENTREGA
//CLASE PRODUCTO

let = prendas = [];
class Producto {
    constructor(nombre, talle, color, precio) {
        this.nombre = nombre.toUpperCase();
        this.talle = talle
        this.color = color
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}































































/*
class Producto {
    constructor(nombre, talle, color, precio) {
        this.nombre = nombre.toUpperCase();
        this.talle = talle
        this.color = color
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
let nombre = prompt("ingresa tu nombre");
alert("Bienvenido a la tienda: " + nombre)
alert("Ingrese los datos a continuación para la busqueda de las prendas disponibles y con su precio final.")
console.log(nombre);
prendas.push(new Producto(prompt("Nombre de prenda: "),
    prompt("Talle de prenda: "),
    prompt("Color de la prenda: "),
    prompt("Precio: "),
));
console.log(prendas);
for (const producto of prendas)
    producto.sumaIva();*/
