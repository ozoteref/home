import producto from "./clases/producto.js";
const refrigerador = new producto("fresamsung","https://image.flaticon.com/icons/svg/188/188921.svg",9000);
console.log(refrigerador);

const contenedor = document.getElementById("pedido");
 
const elementoHijo = document.createElement("div");

elementoHijo.innerHTML = ` 
<img src="${gotcha.getImagen()}"/>
<h3>${gotcha.getNombre()}</h3>
`
 
contenedor.appendChild(elementoHijo)

