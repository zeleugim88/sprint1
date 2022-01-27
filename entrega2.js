//Nivell 1 - Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
/* ((x,y) => {
    console.log(`${x}  ${y}`);
  })("Pepito","Grillo") */
//CORRECCIÓ 27/01/2022 => - En la primera no estás mostrando por consola el resultado de una función que suma dos numeros, 
//sino ejecutando una función que muestra por consola la concatenación de dos strings!
((x, y) => {
  console.log(x + y);
})(51, 49)

//==========================================================================================================================================================================
//==========================================================================================================================================================================
//Nivell 2 - Exercici 1
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
const f = (parametre) => ({ atribut: parametre });
console.log(f("valor"));

//==========================================================================================================================================================================
//==========================================================================================================================================================================
//Nivell 2 - Exercici 2
//Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
//CORRECCIÓ 27/01/2022 => En el método dirNom() de la clase sobra el return (si estás mostrando cosas por la consola no hace falta devolver nada)
class Persona {
  constructor(nom) {
    this.name = nom;
  }
  dirNom() {
    //return
    console.log(this.name);
  }
};

//Persona.dirNom("Pepito");
const pepito = new Persona("Pepito");
pepito.dirNom()

//==========================================================================================================================================================================
//==========================================================================================================================================================================
//Nivell 3 - Exercici 1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
//https://www.todojs.com/clases-new-target/ => No se pueden crear objetos directamente de una clase abstracta y sólo se puede heredar de ella
//CORRECCIÓ 27/01/2022 => En el nivel 3 no tienes una clase abstracta! Tendrás que buscar un poco de información sobre eso ;)

class Persona {
  constructor(nom, cognom) {

    if (this.name = nom,
      this.surname = cognom,
      this.constructor === Persona) {
      throw new Error("No se puede instanciar una clase abstracta")
    };
  }
  dadesPersona() {
    console.log(this.name + " " + this.surname);
  }
}

class Personaje extends Persona {
  constructor(nom, cognom) {
    super(nom, cognom);
  }
}

const f1 = (nom, cognom) => new Persona(nom, cognom);
const f2 = (nom, cognom) => new Personaje(nom, cognom);

//ERROR: No se puede instanciar una clase abstracta
//const persona0 = f1("Johny", "Melavo")

//Se puede instanciar una subclase
const persona1 = f2("Esther", "Colero");
const persona2 = f2("Benito", "Camela");
const persona3 = f2("Elver", "Galarga");

persona1.dadesPersona()
persona2.dadesPersona()
persona3.dadesPersona()