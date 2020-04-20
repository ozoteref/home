import Producto from "./clases/Producto.js"

//instanciar diferentes productos
const bellsprout = new Producto("Bellsprout", "https://image.flaticon.com/icons/svg/188/188998.svg", 100)
const psyduck = new Producto("Psyduck", "https://image.flaticon.com/icons/svg/189/189000.svg", 800)
const telefono = new Producto("telefono", "https://image.flaticon.com/icons/svg/188/188937.svg", 900)
const gotcha = new Producto("gotcha", "https://image.flaticon.com/icons/svg/188/188921.svg", 300)
const pawprints = new Producto("pawprints", "https://image.flaticon.com/icons/svg/188/188923.svg", 34)
const batalla = new Producto("batalla", "https://image.flaticon.com/icons/svg/188/188986.svg", 94)
const realidadAumentada = new Producto("realidadAumentada", "https://image.flaticon.com/icons/svg/188/188957.svg", 400)

const contenedor = document.getElementById("pedido")

//agrega un produto en el DOM
//recibe un objeto del tipo producto
function agregaProducto(produtoSeleccionado, cantidad) {
    const elementoHijo = document.createElement("div")
    elementoHijo.classList.add("card")
    elementoHijo.innerHTML = `
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${produtoSeleccionado.getImagen()}" alt="${produtoSeleccionado.getNombre()}" />
    </div>
        <h3 class="t5 s-mb-2 s-center">${produtoSeleccionado.getNombre()}</h3>
        <div class="s-center">
            <span class="small">Precio: $${produtoSeleccionado.getPrecio()}</span>
        </div>
        <div class="s-center">
            <span class="small">Cantidad: ${cantidad}</span>

        </div>
    </div>
    `
    contenedor.appendChild(elementoHijo)

}
agregaProducto(pawprints, 1);
agregaProducto(gotcha, 5);
agregaProducto(batalla, 2);
agregaProducto(realidadAumentada, 1);

agregaProducto(bellsprout, 10);
agregaProducto(psyduck, 8);
agregaProducto(telefono, 9);