//- Nivell 3 - Exercici 2
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre.

/* //OPCIÓ 1: ¿Una funcion anónima admite parámetros declarados globalmente, como var nom = "Pepito"?
var nom = "Pepito";
const f = (function (nom){
    console.log(`usuari: ${nom}`)
})();
*/

//OPCIÓ 2: 
const f = (function (){
    return "Dani" //`usuari: ${"Dani"}`
})();
console.log(f);