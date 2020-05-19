const mascota = {
    tipo: "perro",
    nombre: "zazil",
    edad: 6,
    sexo:"macho",

    presentarMascota(){
        return `MI mascota se llama ${this.nombre}, es un ${this.tipo}, tiene ${this.edad} años y es ${this.sexo}`;
    }
}

//console.log(mascota.presentarMascota());


class Mascota{
    constructor(tipo, nombre, edad, sexo){
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    presentarMascota(){
        return `MI mascota se llama ${this.nombre}, es un ${this.tipo}, tiene ${this.edad} años y es ${this.sexo}`;
    }
}

const mAlfred = new Mascota("perro", "zazil", 6, "macho");
const mKaren = new Mascota("perro", "fofi", 4, "hembra");

console.log(mAlfred.presentarMascota());
console.log(mKaren.presentarMascota());


class Persona{
    constructor(nombre, genero, edad, direccion){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.direccion = direccion;
    }

    presentarPersona(){
        return `\nMe llamo ${this.nombre}, mi genero es ${this.genero}, tengo ${this.edad} años de edad y mi direccion es ${this.direccion}`;
    }
}

const PerAlfredo = new Persona("Alfredo Flores Camacho","Masculino",25,"Abasolo #20 San Andres MIXQUIC");
const PerBeto = new Persona("Roberto Michel Flores Camacho","Masculino",30,"Camino Real a San Juan");

console.log(PerAlfredo.presentarPersona(),PerBeto.presentarPersona());