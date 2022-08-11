//Declaro la clase para definir los atributos
class Persona{
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
    }
} 
//Creo la función para agregar datos
function addPersona(){
    let newNombre = prompt("Ingresa tu nombre");
    let newEdad= prompt("Ingresa tu edad");
    let newNacionalidad = prompt("Ingresa tu nacionalidad");
    array.push(new Persona(newNombre,newEdad,newNacionalidad));
}
const array = [];
let consultar;
for(let c = 0; c < 2; c++){
     addPersona();
} //Limito la cantidad de personas a "2" a modo de prueba
consultar=prompt("Consulta tus datos: Ingresa tu nombre");
for (const persona of array){
    if(consultar == persona.nombre){
        alert("La persona es " + persona.nombre + " tiene " + persona.edad + " años y es " + persona.nacionalidad);
    }//Comparo los valores ingresados con los valores almacenados en el array y luego muestro los datos correspondientes a ese nombre
}
