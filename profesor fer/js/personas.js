class Persona {
    constructor(nombreCompleto, genero, edad, direccion) {
        this.nombreCompleto = nombreCompleto;
        this.genero = genero;
        this.edad = edad;
        this.direccion = direccion;
    }
}

class Empleado extends Persona {
    constructor(nombreCompleto, genero, edad, direccion, puesto, idEmpleado, sueldo, FechaIngreso) {
        super(nombreCompleto, genero, edad, direccion);
        this.puesto = puesto;
        this.id = idEmpleado;
        this.sueldo = sueldo;
        this.FechaIngreso = FechaIngreso;
    }

    hombreMujer() {
        
    }
}


class Cliente extends Persona {
    constructor(nombreCompleto, genero, edad, direccion, miembroDesde, idCliente) {
        super(nombreCompleto, genero, edad, direccion, miembroDesde, idCliente);
        this.miembroDesde = miembroDesde;
        this.id = idCliente;
    }
}

const empleado1 = new Empleado("Alfredo Flores", "Masculino", 25, "Abasolo #20", "jefe", 1, 10000, 2018);
const empleado2 = new Empleado("Mauricio Joram Torrez", "Masculino", 20, "Camino Real a San Juan", "Gerente", 2, 5000, 2019);
const empleado3 = new Empleado("Laura Martinez", "Femenina", 23, "Zapotitlan", "Gerente general", 3, 7000, 2015);
const empleado4 = new Empleado("Mariana Perez", "Femenina", 23, "Tlaltenco", "Secretaria", 4, 4000, 2017);
const empleado5 = new Empleado("Lucero Flores", "Femenina", 23, "Mixquic", "Recursos Humanos", 5, 5000, 2020);

const cliente1 = new Cliente("Rubi Camacho", "Femenina", 40, "Nativitas", 2015, 1);
const cliente2 = new Cliente("Roberto Michel Flores", "Masculino", 30, "Mixquic", 2016, 2);
const cliente3 = new Cliente("Alfonso Martinez", "Maculino", 45, "Tetelco", 2017, 3);
const cliente4 = new Cliente("Ariana Belli", "Femenina", 24, "Tecamac", 2019, 4);
const cliente5 = new Cliente("Erika Hernandez", "Femenina", 25, "Tulyehualco", 2020, 5);

var arregloEmp = [empleado1, empleado2, empleado3, empleado4, empleado5];
var arregloClien = [cliente1, cliente2, cliente3, cliente4, cliente5];

//console.log(arregloEmp);
//console.log(arregloClien);

//primer metodo
console.log(`Tengo ${arregloEmp.length} empleados`)

let map = arregloEmp.map(({ genero }) => genero);

        console.log(map);

        var contm = 0;
        var contf = 0;

        for (var i = 0; i < map.length; i++) {
            if (map[i] == 'Masculino') {
                contm++;
            } else {
                contf++;
            }
        }

        console.log(`Hay ${contm} empleados masculinos`);
        console.log(`Hay ${contf} empleadas femeninas`);
        

//segundo metodo

let map2 = arregloEmp.map(({ sueldo }) => sueldo);
    console.log("\n");
    console.log(map2);

    for(var i=0; i<arregloEmp.length; i++){
        if(arregloEmp[i].sueldo==Math.max.apply(null, map2)){
            console.log("El empleado con mayor sueldo es: "+arregloEmp[i].nombreCompleto);
        }
        else if(arregloEmp[i].sueldo==Math.min.apply(null, map2)){
            console.log("El empleado con menor sueldo es: "+arregloEmp[i].nombreCompleto);
        }
    }
    
//tercer metodo

console.log(`\nTengo ${arregloClien.length} clientes`);

//cuarto metodo
let map3 = arregloClien.map(({ edad }) => edad);
    console.log("\n");
    console.log(map3);
    var resultado=0;

    for (var i = 0; i < map3.length; i++) {
        resultado = map3[i]+resultado;
        console.log(resultado);     
    }

    console.log(`El promedio de las edades de mis clientes es: ${resultado/map3.length}`);

//quinto metodo cliente mas antiguo

let map4 = arregloClien.map(({ miembroDesde }) => miembroDesde);
    console.log(map4);
    for(var i=0; i<arregloClien.length; i++){
        if(arregloClien[i].miembroDesde==Math.min.apply(null, map4)){
            console.log("\nEl cliente mas antiguo es: "+arregloClien[i].nombreCompleto);
        }
    }




    