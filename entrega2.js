//Nivell 1 - Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.
((x,y) => {
    console.log(`${x}  ${y}`);
  })("Pepito","Grillo")


//Nivell 2 - Exercici 1
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
const f = (parametre) => ({atribut : parametre});
console.log(f("valor"));


//Nivell 2 - Exercici 2
//Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
class Persona  
  {  
	constructor(nom)  
	{  
  	this.name=nom;  
	}  
    dirNom() {
        return console.log(this.name);
      }
  }  ;

  //Persona.dirNom("Pepito");
  const pepito = new Persona("Pepito");
  pepito.dirNom();


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