export default class Producto {
    constructor(nombre, imagen, precio) {
        this.nombre = nombre
        this.imagen = imagen
        this.precio = precio
    }

    getNombre() {
        return this.nombre
    }

    getImagen() {
        return this.imagen
    }

    getPrecio() {
        return this.precio
    }

    setNombre(nombre) {
        this.nombre = nombre
    }

    setImagen(imagen) {
        this.imagen = imagen
    }

    setPrecio(precio) {
        this.precio = precio
    }

}