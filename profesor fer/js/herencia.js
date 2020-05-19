class Animales{
    constructor(tipo,sexo,habitad,familia, alimentacion){
        this.tipo=tipo;
        this.sexo=sexo;
        this.habitad=habitad
        this.familia = familia;
        this.alimentacion = alimentacion;
    }
    mostrarInformacion() {
        return `Este animal es de ${this.tipo}, vide en ${this.habitad} por su alimentación se clasifica en ${this.alimentacion}`;
      }
}

class AnimalesDomesticos extends Animales{
    constructor(tipo,sexo,habitad,familia, alimentacion,raza,nombre){
        super(tipo,sexo,habitad,familia,alimentacion);
        this.raza=raza;
        this.nombre=nombre;
    }

    detalleMoscota() {
        return `Mi ${this.tipo}, se llama ${this.nombre} y es ${this.sexo}`;
      }
}

class AnimalesPeligroExtincion extends Animales{
    constructor(tipo,sexo,habitad,familia,alimentacion,poblacion,nombreCientifico,region){
        super(tipo,sexo,habitad,familia,alimentacion);
        this.poblacion=poblacion;
        this.nombreCientifico=nombreCientifico;
        this.region=region;
    }
}

const aDomestico1 = new AnimalesDomesticos(
    "Perro",
    "Macho",
    "Jungla de Asfalto",
    "Mamifero",
    "Omnivoros",
    "Chihuahua",
    "Rocky"
  );
  
  //console.log(aDomestico1.mostrarInformacion());
  console.log(aDomestico1.detalleMoscota());
  console.log(aDomestico1);
  
  const aDomestico2 = new AnimalesDomesticos(
    "Gato",
    "Hembra",
    "Hogar",
    "Mamifero",
    "Omnivoros",
    "Siamés",
    "Nala"
  );
  
  const aExticion1 = new AnimalesPeligroExtincion(
    "AguilaReal",
    "Macho",
    "Tundra",
    "Oviparos",
    "Carnivoros",
    260,
    "Aquila chrysaetos",
    "Montañosa"
  );
  
  const aExticion2 = new AnimalesPeligroExtincion(
    "Vaquina marina",
    "hembra",
    "Mar",
    "Mamifero",
    "Carnivoro",
    19,
    "Phocoena sinus",
    "Golfo de BJ"
  );
  