//Nivell 3 - Exercici 1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
// => Javascript no tiene clases abstractas

class Persona {  // Create a class
    constructor(nom, cognom) {  // Class constructor
      this.firstName = nom;
      this.lastName = cognom;  // Class body/properties
    }
  }

const f = function(nom, cognom) {
    return new Persona(nom,cognom);
}

console.log(f("Pepito","Grillo"))