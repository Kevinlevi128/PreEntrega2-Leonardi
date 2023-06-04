//PRODUCTOS
const productos = [
    //REMERAS
    {
        id: "Remera-01",
        titulo: "Remera 01",
        imagen: "/imagenes/Remeras/Remera-01.JPG",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-02",
        titulo: "Remera 02",
        imagen: "imagenes/Remeras/Remera-02.JPG",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-03",
        titulo: "Remera 03",
        imagen: "imagenes/Remeras/Remera-03.JPG",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5000
    },
    {
        id: "Remera-04",
        titulo: "Remera 04",
        imagen: "imagenes/Remeras/Remera-04.JPG",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 5000
    },
    //PANTALONES
    {
        id: "Pantalon-01",
        titulo: "Pantalon 01",
        imagen: "imagenes/Pantalones/Pantalon-01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7000
    },
    {
        id: "Pantalon-02",
        titulo: "Pantalon 02",
        imagen: "imagenes/Pantalones/Pantalon-02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7000
    },
    {
        id: "Pantalon-03",
        titulo: "Pantalon 03",
        imagen: "imagenes/Pantalones/Pantalon-03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7000
    },
    {
        id: "Pantalon-04",
        titulo: "Pantalon 04",
        imagen: "imagenes/Pantalones/Pantalon-04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 7000
    },
    //BUZOS
    {
        id: "Buzo-01",
        titulo: "Buzo 01",
        imagen: "imagenes/Buzos/Buzo-01.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 8000
    },
    {
        id: "Buzo-02",
        titulo: "Buzo 02",
        imagen: "imagenes/Buzos/Buzo-02.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 8000
    },
    {
        id: "Buzo-03",
        titulo: "Buzo 03",
        imagen: "imagenes/Buzos/Buzo-03.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 8000
    },
    {
        id: "Buzo-04",
        titulo: "Buzo 04",
        imagen: "imagenes/Buzos/Buzo-04.jpg",
        categoria: {
            nombre: "Buzos",
            id: "buzos"
        },
        precio: 8000
    },

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");



function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = ` <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}
cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener(`click`, (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
} else {
        productoAgregado.cantidad = 1; 
        productosEnCarrito.push(productoAgregado);
}
actualizarNumerito();

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}

