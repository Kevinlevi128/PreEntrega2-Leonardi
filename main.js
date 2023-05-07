//2DA PREENTREGA
//array de productos

const productos = [
    { id: 1, nombre: "Remeras", precio: 1500},
    { id: 2, nombre: "Pantalones", precio: 2500},
    { id: 3, nombre: "Buzos", precio: 4000}
];

let carrito = [];

//Renderizado de productos

const stock = document.getElementById("stock");

let listaProductos = "";
productos.forEach((producto) => {
    listaProductos += `
            <div  class="cards">
                <b>${producto.nombre}</b><br>
                <p>Unitario: $ ${producto.precio}</p>
                <button id="${producto.id}" onclick="comprar(${producto.id})">Comprar</button>              
            </div>
        `;
});

stock.innerHTML = listaProductos

//Enviar al carrito

function comprar(id) {
    //primeros encontramos al producto que coincide con el id del boton
    let productoElegido = productos.find(el => el.id == id)
    console.log(productoElegido);
    //Luego vemos si esta en carrito o no
    if(carrito.some(el => el.id == id)){

        //encontrar el "INDICE" del productoElegido
        let indice = carrito.findIndex(el => el.id == id)
        //agregar la cantidad en ese
        carrito[indice].cantidad +=2 //ponemos 2 para que agrege de a 2 a forma de prueba
        //calculamos el precioTotal
        carrito[indice].precioTotal = carrito[inidice].cantidad * carrito[indice].precio
        alert("El producto ya esta en el carrito");
        console.log("Esta");
    } else {
        console.log("No esta");
        //construimos un nuevo objeto con la cantidad
        const nuevoObjetoACarrito = {
            id: productoElegido.id,
            nombre: productoElegido.nombre,
            precio: productoElegido.precio,
            cantidad: 2,
            precioTotal: parseInt(productoElegido.precio),
            //el precioTotal arranca con el valor unitario parseado porque luego hay que multiplicarlo
        }

        //luego lo pusheamos al carrito
        carrito.push(nuevoObjetoACarrito);
        console.log(carrito);
    }
    renderCarrito(carrito);
    //calculamos el total
    calcularTotal()
}


//Renderizar carrito 
function renderCarrito(cart) {
    console.log(cart)
    const carro = document.getElementById("carro")

    let listaProductosCarrito = "";
    cart.forEach((producto) => {
        listaProductosCarrito += `
            <div  class="cards">
                <b>${producto.nombre}</b><br>
                <p>Unitario: $ ${producto.precio}</p>
                <div class="counter">
                <button onclick="restar(${producto.id})">-</button>
                <p class="numero">${producto.cantidad}</p><br>
                <button onclick="sumar(${producto.id})">+</button>
                </div>
                <p>Total ${producto.nombre}: $ ${producto.precioTotal}</p>
                <button id="btn${producto.id}" onclick="eliminar(${producto.id})">x</button>              
            </div>
        `;
    });

    carro.innerHTML = listaProductosCarrito
    console.log("Funciona")
}
//botones del carrito X

function eliminar(id) {
    console.log(id)
    //filtramos los que no coinciden con el id del click
    let nuevoCarrito = carrito.filter(el => el.id !== id)
    console.log(nuevoCarrito)
    //igualar carrito a nuevoCarrito
    carrito = [...nuevoCarrito]
    //borramos el carrito de la pantalla
    carro.innerHTML = "<p>Carrito Vacío</p>";
    //renderizamos de nuevo
    renderCarrito(nuevoCarrito)
    console.log(carrito)

    calcularTotal()
}

//botones del carrito + y -

function sumar(id) {
    console.log("anda sumar")
    //sumo cantidades
    carrito[carrito.findIndex(el => el.id == id)].cantidad += 1
    //sumo precioTotal
    carrito[carrito.findIndex(el => el.id == id)].precioTotal = carrito[carrito.findIndex(el => el.id == id)].cantidad * carrito[carrito.findIndex(el => el.id == id)].precio

    renderCarrito(carrito)
    calcularTotal()
}

function restar(id) {
    console.log("anda restar")

    //uso el condicional para que no baje la cantidad a números negativos
    if (carrito[carrito.findIndex(el => el.id == id)].cantidad > 0) {
        carrito[carrito.findIndex(el => el.id == id)].cantidad -= 1

        //resto precioTotal
        carrito[carrito.findIndex(el => el.id == id)].precioTotal = carrito[carrito.findIndex(el => el.id == id)].cantidad * carrito[carrito.findIndex(el => el.id == id)].precio


        renderCarrito(carrito)
        calcularTotal()
    }
}

//botón de vaciar carrito

function vaciar() {
    console.log("vaciar")
    carrito = []
    renderCarrito(carrito)
    calcularTotal()

}

//cálculo total

function calcularTotal() {
    const totalCarrito = carrito.map(item => item.precioTotal).reduce((prev, curr) => prev + curr, 0);
    console.log(totalCarrito)
    let total = document.getElementById("total")
    total.innerText = `Total a pagar: $ ${totalCarrito}`
}
calcularTotal()



/*
//CLASE USUARIOS
alert("Bienvenido a Tienda Gacci, lo invitamos a registrarse");

class Usuarios {
    constructor(nombre, contraseña, email){
        this.nombre = nombre;
        this.contraseña = contraseña;
        this.email = email;
    }
}

const usuario1 = new Usuarios("Zoro", 123, "zoro@gmail.com");
const usuario2 = new Usuarios("Luffy", 1234, "luffy@gmail.com");

let listaUsuarios = [usuario1, usuario2];

function registroUsuario(){
    let nombre = prompt("Ingrese nombre de usuario: ");
    let contraseña = parseInt(prompt("Ingrese contraseña de usuario: "));
    let email = prompt("Ingrese su email: ");
    const usuario3 = new Usuarios(nombre, contraseña, email);
    listaUsuarios.push(usuario3)

}
registroUsuario();  
console.log(listaUsuarios);
*/




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
