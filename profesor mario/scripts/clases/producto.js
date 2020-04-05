export default class producto{
    constructor(nombre,imagen,precio){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }

    getNombre(){
        return this.nombre;
    }

    getImagen(){
        return this.imagen;
    }

    getPrecio(){
        return this.precio;
    }

    setNombre(){
        return this.nombre;
    }

    setImagen(){
        return this.imagen;
    }

    setPrecio(){
        return this.precio;
    }
}