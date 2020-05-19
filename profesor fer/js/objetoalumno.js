const alumno={
    nombre: "alfredo",
    apellidos: "flores camacho",
    correo: "alfredo@hotmail.com",
    edad: 25,
    amigo: ["kevin","omar"],
    madre:{
        nombre: "diana",
        apellidos: "flores"
    },
    fruta: ["sandia","uvas","mango"],
    comida: "arroz",

    obtenerRFC(){
        return "FOCA135146";
    },

    obtenerRFC2: function(){
        return "FOCA135146";
    },

    obtenerSaludo(){
        return `Gracias a mis amigos ${this.amigo[0]}, ${this.amigo[1]} por brindarme su apoyo`;
    }
}
//notacion por punto
console.log(alumno.nombre);
console.log(alumno.amigo[0]);
console.log(alumno.madre.nombre);
console.log(alumno.obtenerRFC());
console.log(alumno.fruta[0])
console.log(alumno.correo);

alumno.correo="alfredo_hacker@gmail.com";
console.log(alumno.correo);

//notacion por corchetes
console.log(alumno['edad']);

alumno.edad=30;
console.log(alumno.edad);

console.log(alumno['amigo'][1]);
console.log(alumno['madre']['apellidos']);
console.log(alumno['obtenerRFC']());
console.log(alumno['comida']);

console.log(alumno.obtenerSaludo());
    

    
    
    
    
